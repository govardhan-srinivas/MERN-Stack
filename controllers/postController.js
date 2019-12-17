const validationHandler = require("../validations/validation.handlers");
const Post = require("../models/post");

exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.image = req.file.filename;
    post.description = req.body.description;

    post = await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    validationHandler(req);

    let post = await Post.findById(req.params.id);
    post.description = req.body.description;
    // Can't update image, instead user has to delete the post
    post = await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    validationHandler(req);

    let post = await Post.findById(req.params.id);
    await post.delete();
    res.json({ message: "Success" });
  } catch (err) {
    next(err);
  }
};
