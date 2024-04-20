const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre:  {
    type: String,
    required: true
  },
  year:  {
    type: Date,
    required: true
  },
  publisher:  {
    type: String,
    required: true
  },
  language:  {
    type: String,
    required: true
  },
  isbn:  {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
