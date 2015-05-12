'use strict';

var express = require('express');
var bookRouter = express.Router();

var book = require('../controllers/book.controller');
var user = require('../controllers/user.controller');

module.exports = function(app){
  bookRouter.route('/books')
    .get(book.getBooks)
    .post(user.verifyToken, book.addBook);

  bookRouter.get('/books/search/book', book.searchBooks);
  bookRouter.get('/books/search/author', book.searchAuthors);

  bookRouter.route('/book/:book_id')
    .get(book.getOneBook)
    .put(user.verifyToken, book.updateBook)
    .delete(user.verifyToken, book.deleteBook);

  app.use('/api', bookRouter);
};
