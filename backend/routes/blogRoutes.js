import express from "express";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getOnePost,
} from "../controllers/blogController.js";
const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getOnePost);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id", updateBlog);

export default router;
