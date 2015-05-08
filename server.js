'use strict';

var app = require('./app.js');

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server Started! :-)');
});
