import Blog from "../model/Blog";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({
      status: "false",
      message: "No Blogs Found",
    });
  } else if (blogs.length === 0) {
    return res.status(200).json({
      succes: "true",
      message: "NO Blog Found",
    });
  } else if (blogs.length > 0) {
    return res.status(200).json({
      status: "true",
      count: blogs.length,
      blogs,
    });
  }
  next();
};
export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({
    status: "true",
    blog,
  });
  next();
};
