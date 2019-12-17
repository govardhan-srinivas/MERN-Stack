const validationHandler = require("../validations/validation.handlers");

exports.index = (req, res) => {
  res.send({ message: "hi" });
};

exports.add = (req, res, next) => {
  try {
    validationHandler(req);
    res.json({ message: `Name is ${req.body.name}` });
  } catch (err) {
    next(err);
  }
};
