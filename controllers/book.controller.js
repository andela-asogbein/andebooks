'use strict';

var mongoose = require('mongoose');

require("../models/book.model");
require("../models/user.model");

var Book = mongoose.model("Book");
var User = mongoose.model("User");

module.exports = {

  addBook2: function(req, res){
    Book.create(req.body, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(201).json(book);
    });
  },

  addBook: function(req, res){
    console.log(req.body);
    var book = new Book(req.body);
    book.save(function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(201).json(book);
    });
  },

  getBooks: function(req, res){
    // console.log(Book);
    Book.find({}).populate('addedBy').exec(function(err, books){
      if(err){
        return res.json(err);
      }
      res.status(200).json(books);
    });
  },

  getOneBook: function(req, res){
    Book.findById({_id: req.params.book_id}, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(200).json(book);
    });
  },

  updateBook: function(req, res){
    Book.update({_id: req.params.book_id}, req.body, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(201).json(book);
    });
  },

  deleteBook: function(req, res){
    Book.remove({_id: req.params.book_id}, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(200).json(book);
    });
  },

  searchBooks: function(req, res){
    var titleExpression = new RegExp(req.query.title, 'ig');
    Book.find({title: titleExpression}, function(err, books){
      if(err){
        return res.json(err);
      }
      res.status(200).json(books);
    });
  },

  searchAuthors: function(req, res){
    var authorExpression = new RegExp(req.query.author, 'ig');
    Book.find({author: authorExpression}, function(err, books){
      if(err){
        return res.json(err);
      }
      res.status(200).json(books);
    });
  },

  searchCategories: function(req, res){
    var categoryExpression = new RegExp(req.query.subject, 'ig');
    Book.find({subject: categoryExpression}, function(err, books){
      if(err){
        return res.json(err);
      }
      res.status(200).json(books);
    });
  },

  getRandomBook: function(req, res){
    Book.find({}).exec(function(err, books){
      if(err){
        return res.json(err);
      }
      var booksLength = books.length;
      var randomBook = Math.floor(Math.random()*booksLength);
      res.status(200).json(books[randomBook]);
    });
  }
};
