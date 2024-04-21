const express = require("express");
const config = require("./config/index");
const mongoose = require("mongoose");

const { errorHandler } = require("./middleware");
const bookAPI = require("./service");
const apiHealth = require("express-health-middleware")



const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello world-I am testing the piplines");
});

app.use(apiHealth());

mongoose.connect(config.MONGO_DB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error massage: ${error.message}-----`, error);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
