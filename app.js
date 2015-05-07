var express = require('express');
var app = express();
//exports.app = app;


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/andebooks_db');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/book.route')(app);
/*
app.listen(3000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server Started! :-)');
});
*/
module.exports = app;
