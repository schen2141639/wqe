var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.send("12345678921324");
});


app.listen(HTTP_PORT);
