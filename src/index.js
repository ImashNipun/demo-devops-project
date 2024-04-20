const express = require("express");
const config = require("./config/index");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello world-I am testing the piplines");
});

mongoose.connect(config.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error massage: ${error.message}-----`, error);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
