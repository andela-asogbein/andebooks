var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter valid username'
  },
  password: {
    type: String,
    required: 'Choose a password'
  }
});

var User = mongoose.model('User', UserSchema);
