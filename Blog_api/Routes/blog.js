const express = require("express");
const router = express.Router();

const {getPosts} = require("../Controllers/getPost");
const {createPost}= require("../Controllers/createPost");
const {deletePost}=require("../Controllers/deletePost");
router.get("/posts",getPosts);
router.post("/create",createPost);
router.delete("/delete",deletePost);
module.exports = router;
