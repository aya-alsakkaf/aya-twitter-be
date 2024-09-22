const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  username: { type: String, required: true },
  title: { type: String },
  caption: { type: String },
  image: { type: String },
});

const Post = model("Post", postSchema);
module.exports = Post;
