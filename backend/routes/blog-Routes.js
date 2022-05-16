import express from "express";
import { getAllBlogs } from "../controller/blog-Controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

export default blogRouter;