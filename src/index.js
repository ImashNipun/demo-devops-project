const express = require('express');
const mongoose = require('mongoose');
const apiHealth = require('express-health-middleware');
const config = require('./config/index');
const { errorHandler } = require('./middleware');
const bookAPI = require('./service');

const app = express();
app.use(express.json());

app.use(apiHealth());

mongoose.connect(config.MONGO_DB_URI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully!');
});

mongoose.connection.on('error', (error) => {
  console.log(`Error massage: ${error.message}-----`, error);
});

app.use('/api', bookAPI);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
