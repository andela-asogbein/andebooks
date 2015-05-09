'use strict';

//database
var mongoose = require('mongoose');
require("../models/user.model");
var User = mongoose.model('User');

//authentication
var jwt =require('jsonwebtoken');
var superSecret = 'andebookswebapplication';


module.exports = {

  authenticateUser: function(req, res){
    User.findOne({
      username: req.body.username
    }).select('username password email admin').exec(function(err, user){
      if(err){
        return res.json(err);
      }
      else if(!user){
        res.json({
          message: 'User not found'
        });
      }
      else{
        if(req.body.password != user.password){
          res.json({
            message: 'Wrong password'
          });
        }
        else{
          var token = jwt.sign({
            username: user.username,
            password: user.password,
            email: user.email
          }, superSecret, {
              expiresInMinutes: 1440
          });//end var token
          res.json({
            success: true,
            message: 'Token given freely',
            token: token
          });
        }
      }
    });
  },

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
        return res.json(err);
      }
      res.status(201).json(users);
    });
  },

  getOneUser: function(req, res){
    User.findById({_id: req.params.user_id}, function(err, user){
      if(err){
        return res.json(err);
      }
      res.status(201).json(user);
    });
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
    });
  }

};
