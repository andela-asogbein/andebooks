
var app = require('../app.js');
var request = require('supertest')(app);

describe('Test for book route', function(){

  it('Test GET method for the root route', function(done){
    console.log(123);
    request
    .get('/')
    .expect(201)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res){
      if(err){
        return done(err);
      }
      done();
    });
  });

  //it('Test GET method for ')


});
