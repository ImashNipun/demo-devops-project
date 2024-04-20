const express = require("express")
const { createBook } = require("./service")
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




module.exports = router