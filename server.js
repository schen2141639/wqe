var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


 
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.send("12345678921324");
});


app.listen(HTTP_PORT);
