var express = require("express"),
    app     = express()

app.get('/', function(req, res){
    res.sendfile(__dirname + '/src/index.html')
});

app.get("/static/bundle.js", function (req, res) {
    res.sendFile("/static/bundle.js", {root: __dirname})
})

app.listen(3000)
