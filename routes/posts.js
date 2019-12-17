const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();
const uploadImage = require('../middlewares/multer.handler');

const { hasDescription } = require("../validations/validations");

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/", uploadImage('posts').single('image'), hasDescription, postController.add);
router.put("/:id", hasDescription, postController.update);
router.patch("/:id", hasDescription, postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
