const express = require("express");
const {
  getAllPosts,
  createPost,
  getOnePost,
  getPostByUsername,
  deletePost,
  updatePost,
} = require("./posts.controller");
const upload = require("../../middleware/multer");
const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.post("/", upload.single("image"), createPost);
postRouter.get("/:id", getOnePost);
postRouter.get("/username/:username", getPostByUsername);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

module.exports = postRouter;
