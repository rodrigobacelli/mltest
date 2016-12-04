var express = require("express"),
    app     = express()

app.get("/", function (req, res) {
    res.send("<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        "<title>ML Test</title>" +
        "</head>" +
        "<body>" +
        "<div id='app'></div>" +
        "<script type='text/javascript' src='/static/bundle.js'></script>" +
        "</body>" +
        "</html>")
})

app.get("/static/bundle.js", function (req, res) {
    res.sendFile("/static/bundle.js", {root: __dirname})
})

app.listen(3000)