var express = require('express');
var app = express();
exports.app = app;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/andebooks_db');
//var mongoose = require('mongoose');

app.listen(8000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server Started! :-)');
});
