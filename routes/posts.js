const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router.get("/", postController.index);
router.post('/',postController.add);
module.exports = router;
