const Blog = require("../models/blog")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const Admin = require("../models/admin")
const secret= "KHUSHAL"
exports.handleCreateBlog= async(req,res) => {
  try{

    
    const {author,slug, title,content,image,published_date,comments,description} = req.body
    //if admin exists then make blog otherwise not
    if(res.admin){
      
    const blog = await Blog.create({
      author,title,content,slug,image,published_date,comments,description
    })
    res.json(blog)
  }
  else{
    res.status(500).json({error:"Unauthorised"})
  }
}
catch(err){
  console.log(err)
  res.status(400).json({error:"Internal Server Error"})
}
}
exports.handleDeleteBlog=async (req,res) => {
    const id = req.params.id
    if(res.admin){

      const blogId = await Blog.findByIdAndDelete(id)
      res.json({message:'Blog Deleted',"success":true})
    }
    else{
      res.status(500).json({eror:"Unauthorised"})
    }
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