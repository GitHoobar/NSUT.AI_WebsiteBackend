const Blog = require("../models/blog")
exports.handleCreateBlog= async(req,res) => {
    const {author,slug, title,content,image,published_date,comments,description} = req.body
    const blog = await Blog.create({
      author,title,content,slug,image,published_date,comments,description
    })
    res.json(blog)
  }
exports.handleDeleteBlog=async (req,res) => {
    const id = req.params.id
    const blogId = await Blog.findByIdAndDelete(id)
     res.json({message:'Blog Deleted',"success":true})
  }
exports.handleGetBlog=async (req,res) => {
    const id = req.params.id
    const blogId = await Blog.findById(id)
     res.json(blogId)
}
exports.handleGetBlogs=async(req,res) => {
    const blogs = await Blog.find()
    res.json(blogs)
 }