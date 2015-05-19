'use strict';

var app = require('../app.js');
var request = require('supertest')(app);

describe('Test for book route', function(){

  it('Test GET method for /api/books', function(done){
    request
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res){
      if(err){
        return done(err);
      }
      //console.log(res.body);
      done();
    });
  });

  it('Test POST method for /api/books', function(done){
    var book = {title: 'Ake', author: 'Wole Soyinka', blurb: 'An autobiography'};
    request
      .post('api/books')
      .send(book)
      .expect(200);

      done();
  });


  it('Test PUT method for /api/v1/users/:id', function(done){
    var bookEdit = {title: 'Ake', author: 'Wole Soyinka', blurb: 'An autobiography of a writer'};
    request
      .get('/api/v1/users')
      .expect(200)
      .end(function(err, res){
        if(err){
          return done(err);
        }
        request
          .put('/api/v1/users/' + res.body[0]._id)
          .send(editedUser)
          .expect(200)
          .end(function(err, res){
          if(err){
            return done(err);
          }
          expect(res.body).not.toBeNull();
          console.log(res.body);
          done();
        });
    });
  });
});


