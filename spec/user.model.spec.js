'use strict';

var mongoose = require('mongoose');

require('../models/user.model.js');

var User = mongoose.model("User");

var userEntry;

describe('Testing User model', function(){
  beforeEach(function (done){
    userEntry = new User({
      username : 'jibola',
      password: '1234'
    });
  done();
  });//end beforeeach

  describe('', function(){
    it("Error should be returned when user enters no username", function(done){
      userEntry.username = '';
      userEntry.save(function(error){
        expect(error).not.toBeNull();
        done();
      });
    });

    it("Return an error if user enters no password", function(done){
      userEntry.password = '';
      userEntry.save(function(error){
        expect(error).not.toBeNull();
        done();
      })
    });


  });

   afterEach(function (done){
    User.remove(function (error){
      if (error){
        return done(error);
      }
      done();
    });
   });

});
