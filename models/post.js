const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("post", postSchema);
