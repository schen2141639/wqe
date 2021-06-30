const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

// const getModel = require("./model");

const exphbs = require('express-handlebars');

const crypto = require("crypto");

const cookieParser = require("cookie-parser");

const app = express();

// configure the handlebars view engine 
// .hbs is set as the extension
// base layout template is set to main  (main.hbs is in views/layouts)
// base template stores all the header and footer information
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));

// set app's view engine as handlebars
app.set('view engine', 'hbs');

// generally filename main.hbs is used for base template. So the code in main is transfered to 
// home.hbs which extends main.hbs and used to greet the user
app.get('/', (req, res) => {
        res.render('home', { username: 'Joe' })
})

// login.hbs template extends the base template main to show a login form
app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(5000);
