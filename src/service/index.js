const express = require('express');
const books = require('./api');

const router = express.Router();

router.use(books);

module.exports = router;
