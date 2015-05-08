'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/andebooks_db');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/book.route')(app);


module.exports = app;
