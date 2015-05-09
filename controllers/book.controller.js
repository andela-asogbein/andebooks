'use strict';

var mongoose = require('mongoose');
require("../models/book.model");
var Book = mongoose.model("Book");

module.exports = {
  addBook: function(req, res){
    Book.create(req.body, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(201).json(book);
    });
  },

  getBooks: function(req, res){
    // console.log(Book);
    Book.find({}).exec(function(err, books){
      if(err){
        return res.json(err);
      }
      res.status(200).json(books);
    });
  },

  getOneBook: function(req, res){
    Book.findById({_id: req.params.book_id}, function(err, book){
      if(err){
        return res.json(err)
      }
      res.status(200).json(book);
    })
  },

  updateBook: function(req, res){
    Book.update({_id: req.params.book_id}, req.body, function(err, book){
      if(err){
        return res.json(err)
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
    })
  }

};
