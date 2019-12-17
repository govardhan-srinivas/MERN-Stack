const { body } = require("express-validator");

exports.hasDescription = body('description')
  .isString()
  .isLength({ min: 5 })
  .withMessage("Description is required & min-length is 5 chars");
