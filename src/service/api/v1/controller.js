const express = require("express");
const { createBook, getBooks, getBook, updateBook, deleteBook } = require("./service");
const { celebrate, Segments } = require("celebrate");
const asyncHandler = require("express-async-handler");
const { addBookSchema } = require("./schema");
const { response } = require("../../../utils");

const router = express.Router();

//Add a new book
router.post(
  "/",
  celebrate({ [Segments.BODY]: addBookSchema }),
  asyncHandler(async (req, res) => {
    const book = req.body;
    const newBook = await createBook(book);
    return response({
      res,
      status: 200,
      message: "Book Added Sucessfully",
      data: newBook,
    });
  })
);

//Get books
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const books = await getBooks();
    return response({
      res,
      status: 200,
      message: "Books sucessfuly retrieved",
      data: books,
    });
  })
);

//Get a book
router.get(
  "/:bookId",
  asyncHandler(async (req, res) => {
    const bookId = req.params.bookId;
    const book = await getBook(bookId);
    return response({
      res,
      status: 200,
      message: "Books sucessfuly retrieved",
      data: book,
    });
  })
);

//update a book
router.patch(
  "/:bookId",
  asyncHandler(async (req, res) => {
    const bookId = req.params.bookId;
    const book = req.body;

    const update_book = await updateBook(bookId, book);

    return response({
      res,
      status: 202,
      message: "Book updated successfully!",
      data: update_book,
    });
  })
);

//delete a book
router.delete(
  "/:bookId",
  asyncHandler(async (req, res) => {
    const bookId = req.params.bookId;

    const delete_book = await deleteBook(bookId);

    return response({
      res,
      status: 201,
      message: "Product deleted successfully!",
    });
  })
);

module.exports = router;
