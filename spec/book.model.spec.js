'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/andebooks_db_test');

require('../models/book.model.js')

var Book = mongoose.model("Book");

var bookEntry;

describe('Testing Book model', function(){
  beforeEach(function (done){
    bookEntry = new Book({
      title: 'The Rails 4 Way',
      author: 'Obie Fernandez',
      blurb: 'The bestselling book about Ruby on Rails',
      available: true,
      pages: 900,
      subject: 'Rails',
      addedBy: 'Jibola Sogbein'
    });
  done();
  });//end beforeeach

  describe('', function(){
    it("Error should be returned when user enters no title", function(done){
      bookEntry.title = '';
      bookEntry.save(function(error){
        expect(error).not.toBeNull();
        done();
      });
    });

    it("Return an error if user enters no author name", function(done){
      bookEntry.author = '';
      bookEntry.save(function(error){
        expect(error).not.toBeNull();
        done();
      })
    });

    it("Error should be returned when user enters no book description", function(done){
      bookEntry.blurb = '';
      bookEntry.save(function(error){
        expect(error).not.toBeNull();
        done();
      });
    });
    //Redundant?
    it("Book title should be a string", function(done){
        expect(typeof(bookEntry.title)).toBe("string");
        console.log(bookEntry);
        done();
    });


  });
    afterEach(function (done){
      Book.remove(function (error){
        if (error){
          return done(error);
        }
      done();
      });
   });

});
