'use strict';

module.exports = function(app){
  var Book = require('../controllers/book.controller');

  app.get('/api/books', Book.getBooks); //get all books
  app.post('/api/books', Book.addBook); //add a book
  app.put('/api/book/:book_id', Book.updateBook); //update a book entry
  app.delete('/api/book/:book_id', Book.deleteBook); //delete a book
}
