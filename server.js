/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Daniel Pereira  Student ID: 037747078  Date: 22 Jan 2021
*
*  Online (Heroku) URL: https://pure-mountain-17983.herokuapp.com
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Daniel Pereira - 037747078");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);