const { validationResult } = require("express-validator");

module.exports = req => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    const error = new Error("Validation Error Failed");
    error.statusCode = 422; // No proper data
    error.validation = validationError.array();
    throw error;
  }
};
