var express = require("express"),
    app     = express()

app.get('/', function(req, res){
    res.sendfile(__dirname + '/src/index.html')
});

app.get("/static/bundle.js", function (req, res) {
    res.sendFile("/static/bundle.js", {root: __dirname})
})

app.get("/static/css/main.css", function (req, res) {
    res.sendFile("/static/css/main.css", {root: __dirname})
})

app.get("/assets/**/*.*", function (req, res) {
    var path = req.params[0] ? req.params[0] : 'index.html',
        file = req.params[2] && req.params[3] ? req.params[2] + '.' + req.params[3] : 'index.html';

    var path_name = '';
    if (path === 'index.html') {
        path_name = '/assets/index.html'
    } else {
        path_name = '/assets/'+ path + '/' + file;
    }
    res.sendFile(path_name, {root: __dirname})
})

app.listen(3000)
