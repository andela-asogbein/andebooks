'use strict';

var app = require('./app.js');

app.listen(process.env.PORT || 3000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server Started on port 3000');
});
