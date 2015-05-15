'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');


//mongodb connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/andebooks_db');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});



require('./routes/book.route')(app);
require('./routes/user.route')(app);


module.exports = app;
