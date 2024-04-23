const express = require('express');
const BookRoute = require('./v1/controller');

const router = express.Router();

router.use('/v1/books', BookRoute);

module.exports = router;
