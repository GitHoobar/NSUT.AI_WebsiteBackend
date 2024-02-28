const News = require("../models/news")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const Admin = require("../models/admin")
const secret= "KHUSHAL"
exports.handleCreateNews= async(req,res) => {
  try{

    const {title,description} = req.body
    //if admin exists then make News otherwise not
    if(res.admin){
      
    const news = await News.create({
      title, description
    })
    console.log(news)
    res.json(news)
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
exports.handleDeleteNews=async (req,res) => {
  try{

    const id = req.params.id
    if(res.admin){
      
      const NewsId = await News.findByIdAndDelete(id)
      res.json({message:'News Deleted',"success":true})
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
exports.handleGetNews=async (req,res) => {
  try{

    const id = req.params.id
    const NewsId = await News.findById(id)
    res.json(NewsId)
  }
  catch(err){
    console.log(err)
    res.status(400).json({error:err, success:false})
  }
  }
exports.handleGetNewss=async(req,res) => {
    const Newss = await News.find()
    res.json(Newss)
 }
exports.handleUpdateNews=async(req,res)=>{
  const id = req.params.id
  const update = req.body
  try{
    const NewsId = await News.updateOne(
      { _id: id },
      { $set: update })
    return res.status(200).json({"sucess":NewsId.acknowledged})
  }catch(error){
    return res.status(500).json({message:error})
  }
}
