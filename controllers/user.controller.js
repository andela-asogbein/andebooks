var User = require('../models/user.model');

module.exports = {
  addUser: function(req, res){
    User.create(req.body, function(err, user){
      if(err){
        return res.json(err);
      }
      res.status(201).json(user);
    });
  },

  getUsers: function(req, res){
    User.find({}).exec(function(err, users){
      if(err){
        console.log(err);
        return res.json(err);
      }
      res.status(201).json(users);
    });
  },

  getOneUser: function(req, res){
    User.findById({_id: req.params.user_id}, function(err, user){
      if(error){
        return res.json(err)
      }
      res.status(201).json(user);
    })
  },

  updateUser: function(req, res){
    User.update({_id: req.params.user_id}, req.body, function(err, user){
      if(err){
        return res.json(err);
      }
      res.status(201).json(user);
    });
  },

  deleteUser: function(req, res){
    User.remove({_id: req.params.user_id}, function(err, user){
      if(err){
        return res.json(err);
      }
      res.status(200).json(user);
    })
  }

};
