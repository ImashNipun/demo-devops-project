const { response } = require("../utils");
const { isCelebrateError } = require("celebrate");

const errorHandler = (error, _req, res, _next) => {
  if (isCelebrateError(error)) {
    for (const e of error.details.values()) return response({ res, status: 400, message: e.message });
  }

  return response({ res, status: error.status ?? 500, message: error.message });
};

process.on("unhandledRejection", (reason) => {
  console.error(reason);
});

module.exports = errorHandler;
