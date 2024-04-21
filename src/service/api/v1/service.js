const express = require("express");
const { BookModel } = require("../../../models");

const createBook = (book) => {
  const new_book = BookModel.create(book);
  return new_book;
};

const getBooks = () => {
  const books = BookModel.find();
  return books;
};

const getBook = (bookId) => {
  const book = BookModel.findById(bookId);
  return book;
};

const updateBook = (bookId, book) => {
  const updated_book = BookModel.findByIdAndUpdate(bookId, book, { new: true });
  return updated_book;
};

const deleteBook = (bookId) => {
  const deleted_book = BookModel.findByIdAndDelete(bookId);
  return deleted_book;
}

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
};
