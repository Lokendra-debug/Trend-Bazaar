const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};