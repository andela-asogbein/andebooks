'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter valid username'
  },
  password: {
    type: String,
    required: 'Choose a password',
    validate: [
      function(password){
        return password.length >= 6;
      },'Password should be longer than 6 characters'
    ]
  },
  email: {
    type: String,
    match: /.+\@.+\..+/
  },
});

mongoose.model('User', UserSchema);
