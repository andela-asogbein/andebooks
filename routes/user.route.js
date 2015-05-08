'use strict';

module.exports = function(app){
  var user = require('../controllers/user.controller');

  app.get('/api/users', user.getUsers); //get all users
  app.post('/api/users', user.addUser); //add a user
  app.put('/api/user/:user_id', user.updateUser); //update a user entry
  app.delete('/api/user/:user_id', user.deleteUser); //delete a user
}
