var express = require("express"),
    app     = express()

app.get('/', function(req, res){
    res.sendfile(__dirname + '/src/index.html')
});

app.get("/static/bundle.js", function (req, res) {
    res.sendFile("/static/bundle.js", {root: __dirname})
})

app.get("/static/vendor/chico/chico.js", function (req, res) {
    res.sendFile("/src/js/vendor/chico/chico.js", {root: __dirname})
})

app.get("/static/css/main.css", function (req, res) {
    res.sendFile("/static/css/main.css", {root: __dirname})
})

app.get("/assets/**.*", function (req, res) {
    var file_path = req.params[0] ? req.params[0] : 'index',
        ext = req.params[2] ? req.params[2] : 'html';

    var path_name = './assets/'+ file_path + '.' + ext;
    res.sendFile(path_name, {root: __dirname})
})

app.get("/static/assets/**.*", function (req, res) {
    var file_path = req.params[0] ? req.params[0] : 'index',
        ext = req.params[2] ? req.params[2] : 'html';

    var path_name = './assets/'+ file_path + '.' + ext;
    res.sendFile(path_name, {root: __dirname})
})

app.listen(3000)
