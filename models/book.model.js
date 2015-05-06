'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
      type: String,
      required: 'Enter book title'
    },
    author: {
      type: String,
      required: 'Enter name of author'
    },
    blurb: {
      type: String,
      required: 'Enter description of the book so others know what it is about'
    },
    available: {
      type: Boolean
    },
    pages: {
      type: Number,
      min: 1
    },
    subject: {
      type: String
    },
    addedBy: {
      type: String
      //type: Schema.Types.ObjectId,
      //ref: 'User'
    }
});

module.exports = mongoose.model("Book", BookSchema);
