import express from "express";
import { addBlog, getAllBlogs } from "../controller/blog-Controller";
import multer from "multer";

const blogRouter = express.Router();



blogRouter.get("/", getAllBlogs);
blogRouter.post("/addblog", addBlog);

export default blogRouter;
