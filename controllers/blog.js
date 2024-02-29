const Blog = require("../models/blog")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const Admin = require("../models/admin")
const secret= "KHUSHAL"
exports.handleCreateBlog= async(req,res) => {
  try{

    const {author,slug, title,image,published_date,comments,description} = req.body
    //if admin exists then make blog otherwise not
    if(res.admin){
      
    const blog = await Blog.create({
      author,title,slug,image,published_date,comments,description
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
  try{

    const id = req.params.id
    if(res.admin){
      
      const blogId = await Blog.findByIdAndDelete(id)
      res.json({message:'Blog Deleted',"success":true})
    }
    else{
      res.status(500).json({eror:"Unauthorised"})
    }
  }
  catch(err){
    console.log(err)
    res.status(400).json({error:err, success:false})
  }
  }
exports.handleGetBlog=async (req,res) => {
  try{

    const id = req.params.id
    const blogId = await Blog.findById(id)
    res.json(blogId)
  }
  catch(err){
    console.log(err)
    res.status(400).json({error:err, success:false})
  }
  }
exports.handleGetBlogs=async(req,res) => {
    const blogs = await Blog.find()
    res.json(blogs)
 }
exports.handleUpdateBlog=async(req,res)=>{
  const id = req.params.id
  const update = req.body
  try{
    const blogId = await Blog.updateOne(
      { _id: id },
      { $set: update })
    return res.status(200).json({"success":blogId.acknowledged, blog:blogId})
  }catch(error){
    return res.status(500).json({message:error})
  }
}
