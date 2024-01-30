const Member= require("../models/Member")
const getmember= require("../middlewares/getmember")
exports.handleGetAllMembers=async(req,res)=>{
    try{
    
    let members=await Member.find()
    res.status(200).json(members)
    }
    catch(err){
        res.status(400).json({error:err, success:false})
    }
}
exports.handleGetSingleMember= async(req,res)=>{
    try{
    
    res.status(200).json(res.member)
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err, success:false})
    }
}
exports.handleCreateMember= async(req,res)=>{
    try{
    let {name, bio, image, department, achievements, social , projects}= req.body
    let member= await Member.create({name, bio, image, department, achievements, social,projects})
    res.status(200).json(member)
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err, success:false})
    }
}
exports.handleUpdateMember=async(req,res)=>{
    try{
    let member= await Member.findOneAndUpdate({_id:req.params.id},req.body)
    
    res.status(200).json({success:true});
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err, success:false})
    }

}
exports.handleDeleteMember=async(req,res)=>{
    try{
    await res.member.deleteOne({_id:req.params.id})
    res.status(200).json({success:true})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err, success:false})
    }

}
