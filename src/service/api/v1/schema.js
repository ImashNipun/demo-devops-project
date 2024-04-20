const { Joi } = require("celebrate");

const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.string().required(),
  publisher: Joi.string().required(),
  language: Joi.string().required(),
  isbn: Joi.string().required(),
  price: Joi.number().required(),
});

module.exports = {
    addBookSchema,
}