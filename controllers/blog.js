const Blog = require("../models/blog")
exports.handleCreateBlog= async(req,res) => {
    const {author,title,content,image,published_date,comment,description} = req.body
    const blog = await Blog.create({
      author,title,content,image,published_date,comment,description
    })
    console.log(author,title,content)
    res.json(blog)
  }
exports.handleDeleteBlog=async (req,res) => {
    const id = req.params.id
    const blogId = await Blog.findByIdAndDelete(id)
    return res.json({message:'Blog Deleted',"success":true})
  }
exports.handleGetBlog=async (req,res) => {
    const id = req.params.id
    const blogId = await Blog.findById(id)
    return res.json(blogId)
}
exports.handleGetBlogs=async(req,res) => {
    const blogs = await Blog.find()
    return res.json(blogs)
 }