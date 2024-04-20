const express = require("express")
const { createBook, getBooks, getBook } = require("./service")
const { celebrate, Segments } = require("celebrate")
const asyncHandler = require("express-async-handler")
const { addBookSchema } = require("./schema")
const { response } = require("../../../utils")

const router = express.Router();

//Add a new product
router.post(
    "/",
    celebrate({[Segments.BODY]: addBookSchema}),
    asyncHandler(async(req,res) => {
        const book = req.body
        const newBook = await createBook(book)
        return response({res, status: 200, message: "Book Added Sucessfully", data: newBook})
    })

);


//Get products
router.get(
    "/",
    asyncHandler(async(req,res) => {
        const books = await getBooks()
        return response({res, status: 200, message: "Books sucessfuly retrieved", data: books})
    })
);

//Get product
router.get(
    "/:bookId",
    asyncHandler(async(req,res) => {
        const bookId = req.params.bookId
        const book = await getBook(bookId)
        return response({res, status: 200, message: "Books sucessfuly retrieved", data: book})
    })
)


module.exports = router