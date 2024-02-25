const express= require("express")
const router= express()
const User= require("../../models/user")
router.post("/create",async(req,res)=>{
    try{
        console.log(req.body.uid)
        let user= await User.create({uid:req.body.uid, email:req.body.email})
        res.json(user)
    }
    catch(err){
        res.status(400).json({error:err,success:false})
    }
})
module.exports= router  