const mongoose= require("mongoose")
const Member = require("../models/Member")

const getmember= async(req, res,next)=>{
    let member
    try{
        member= await Member.findOne({_id:req.params.id}).populate("projects")
        if(!member){
            res.status(400).json({success:false,error:"no member found"})
        }
        else{
            res.member= member
        }
    }
    catch(err){
        console.log(err)
        res.json({
            error:err.error,
            message:"member not found"
        })
    }
    
    next()
}
module.exports= getmember