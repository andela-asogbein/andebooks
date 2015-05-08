'use strict';

var Book = require(../models/book.model.js);

module.exports = {
  addBook: function(req, res){
    Book.create(req.body, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(201).json(blog);
    });
  },

  getBooks: function(req, res){
    Book.find({}).exec(function(err, books){
      if(err){
        return res.json(err);
      }
      res.send(books);
    });
  },

  getOneBook: function(req, res){
    Book.findById({_id: req.params.book_id}, function(err, book){
      if(error){
        return res.json(err)
      }
      res.send(book);
    })
  },

  updateBook: function(req, res){
    Book.update({_id: req.params.book_id}, req.body, function(err, book){
      if(err){
        return res.json(err)
      }
      res.status(201).json(blog);
    });
  },

  deleteBook: function(req, res){
    Book.remove({_id: req.params.book_id}, function(err, book){
      if(err){
        return res.json(err);
      }
      res.status(200).json(blog);
    })
  }

};
