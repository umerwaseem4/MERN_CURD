import blogModel from "../model/Blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blog = await blogModel.find();
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  const blog = new blogModel({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogModel.findById(id);
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = req.body;
    await blogModel.findByIdAndUpdate(id, updatedBlog, { new: true });
    res.json(updatedBlog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await blogModel.findByIdAndDelete(id);
    res.json({ message: "blog deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
