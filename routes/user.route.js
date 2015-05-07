
module.exports = function(app){
  var User = require('../controllers/user.controller');

  app.get('/api/users', User.getUsers); //get all users
  app.post('/api/users', User.addUser); //add a user
  app.put('/api/user/:user_id', User.updateUser); //update a user entry
  app.delete('/api/user/:user_id', User.deleteUser); //delete a user
}
