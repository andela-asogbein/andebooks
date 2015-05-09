'use strict';

module.exports = function(app){
  var user = require('../controllers/user.controller');

  app.post('/api/authenticate', user.authenticateUser);

  app.route('/api/users')
    .get(user.getUsers) //get all users
    .post(user.addUser); //add a user

  app.route('/api/user/:user_id')
    .put(user.updateUser) //update a user entry
    .delete(user.deleteUser); //delete a user
};
