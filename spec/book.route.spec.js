'use strict';

var app = require('../app.js');
var request = require('supertest')(app);

describe('Test for book route', function(){

  it('Test GET method for /api/books', function(done){
    request
    .get('/api/books')
    .expect(201)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res){
      if(err){
        return done(err);
      }
      done();
    });
  });

  it('Test POST method for /api/books', function(done){
    var book = {title: 'Ake', author: 'Wole Soyinka', blurb: 'An autobiography'};
    request
      .post('api/books')
      .send(book)
      .expect(200)
      done();
  });

  it('Test PUT method for /api/book/:book_id', function(done){
    var bookEdit = {title: 'Ake', author: 'Wole Soyinka', blurb: 'An autobiography by the only Nigerian Nobel Laureate'};
    request
      .put('api/book/:book_id')
      .send(bookEdit)
      .expect(200)
      .done();
  });

});
