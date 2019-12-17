const { body } = require("express-validator");

exports.hasName = body('name')
  .isString()
  .isLength({ min: 5 })
  .withMessage("Name is required & min-length is 5 chars");
