import express from "express";
import { addBlog, getAllBlogs } from "../controller/blog-Controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/addblog", addBlog);

export default blogRouter;
