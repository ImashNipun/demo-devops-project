const express = require("express");
const { BookModel } = require("../../../models");

const createBook = (book) => {
  const new_book = BookModel.create(book);
  return new_book;
};



module.exports = {
  createBook,
};
