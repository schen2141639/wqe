
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const getModel = require("./model");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");
const app = express();
 
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.send("12345678921324");
});


app.listen(HTTP_PORT);