'use strict';

module.exports = function(app){
  var book = require('../controllers/book.controller');

  app.get('/api/books', book.getBooks); //get all books
  app.get('/api/book/:book_id', book.getOneBook);
  app.post('/api/books', book.addBook); //add a book
  app.put('/api/book/:book_id', book.updateBook); //update a book entry
  app.delete('/api/book/:book_id', book.deleteBook); //delete a book
}
