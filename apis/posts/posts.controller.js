const Post = require("../../models/Post");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ data: posts });
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newPost = await Post.create(req.body);
    return res.status(201).json({ data: newPost });
  } catch (error) {
    next(error);
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username } = req.query;
    console.log(username);
    const foundPost = await Post.findById(id);

    return res.status(200).json({ data: foundPost });
  } catch (error) {
    next(error);
  }
};

const getPostByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;

    const foundPost = await Post.find({ username: username });

    return res.status(200).json({ data: foundPost });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Deleted successfully", data: deletedPost });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ data: updatedPost });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllPosts,
  createPost,
  getOnePost,
  getPostByUsername,
  deletePost,
  updatePost,
};
