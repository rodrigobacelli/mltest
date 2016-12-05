"use strict";

var gulp            = require("gulp"),
    gutil           = require("gulp-util"),
    nodemon         = require("gulp-nodemon"),
    eslint          = require('gulp-eslint'),
    source          = require("vinyl-source-stream"),
    buffer          = require("vinyl-buffer"),
    browserify      = require("browserify"),
    watchify        = require("watchify"),
    babelify        = require("babelify"),
    envify          = require("envify"),
    lrload          = require("livereactload"),
    sassLint        = require('gulp-sass-lint'),
    htmlmin         = require('gulp-htmlmin'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat'),
    cssmin          = require('gulp-cssmin'),
    uglify          = require('gulp-uglify'),
    ghPages         = require('gulp-gh-pages')


gulp.task('set-env:dev', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-env:prod', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('css', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css'))
});


gulp.task("watch:js", function() {
    // start JS file watching and rebundling with watchify
    var bundler = browserify({
        entries:      [ "./src/index.js" ],
        transform:    [ [babelify, {}], [envify, {}] ],
        plugin:       [ lrload ],    // no additional configuration is needed
        debug:        true,
        cache:        {},
        packageCache: {},
        fullPaths:    true                       // for watchify
    })
    var watcher = watchify(bundler)
    rebundle()
    return watcher
        .on("error", gutil.log)
        .on("update", rebundle)

    function rebundle() {
        gutil.log("Update JavaScript bundle")
        watcher
            .bundle()
            .on("error", gutil.log)
            .pipe(source("static/bundle.js"))
            .pipe(buffer())
            .pipe(gulp.dest("."))
    }
})

gulp.task("watch:css", function() {
    gutil.log("Update Css bundle")
    gulp.watch('./src/scss/**/*.scss', ['css'])
})

gulp.task("watch:server", function() {
    nodemon({ script: "server.js", ext: "js", ignore: ["gulpfile.js", "static/bundle.js", "node_modules/*"] })
        .on("change", function () {})
        .on("restart", function () {
            console.log("Server restarted")
        })
})

gulp.task('lint:js', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
})

gulp.task('lint:styles', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})

gulp.task('bundle:html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
})

gulp.task("bundle:js", function() {
    var options = {
        entries: "./src/index.js",   // Entry point
        extensions: [".js", ".jsx"],            // consider files with these extensions as modules
        debug: false,  // add resource map at the end of the file or not
        paths: ["./src/"]           // This allows relative imports in require, with './scripts/' as root
    };

    return browserify(options)
        .transform([babelify, envify])
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())    // Stream files
        .pipe(uglify())
        .pipe(gulp.dest("./dist/static/"));
});

gulp.task('bundle:css', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('gh-pages-deploy', ["build"], function() {
    gulp.src("./assets/**/*.*")
        .pipe(gulp.dest('./dist/assets/'));
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


gulp.task('lint', ['lint:js', 'lint:styles'])

gulp.task('pre-commit', ['lint'])

gulp.task("dev", ["set-env:dev", "watch:server", "watch:js", "watch:css"])

gulp.task("build", ["set-env:prod", "pre-commit", "bundle:html", "bundle:css", "bundle:js"])
