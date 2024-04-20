const express = require("express");
const config = require("./config/index");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware");
const bookAPI = require("./service");

const app = express();
app.use(express.json())

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

app.use("/api", bookAPI);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
