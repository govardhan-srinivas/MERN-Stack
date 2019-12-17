const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

const { hasName } = require("../validations/validations");

router.get("/", postController.index);
router.post("/", hasName, postController.add);
module.exports = router;
