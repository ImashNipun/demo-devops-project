const express = require("express");
const { BookModel } = require("../../../models");

const createBook = (book) => {
  const new_book = BookModel.create(book);
  return new_book;
};

const getBooks = () => {
  const books = BookModel.find()
  return books
}

const getBook = (bookId) => {
  const book = BookModel.findById(bookId);
  return book;
}

module.exports = {
  createBook,
  getBooks,
  getBook,
};
