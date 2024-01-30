const mongoose =require("mongoose")
const express= require("express")
const Admin= require("../../models/admin")
const router= express()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret="KHUSHAL"
router.post("/create",async(req,res)=>{
    try{
        //token -> req -> verify -> acess/access

        let {email, password}= req.body
        
        //generate salt 
        const salt =await  bcrypt.genSaltSync(10);
        //generate encrypted password
        
        const hashedPassword = await bcrypt.hashSync(password, salt);
        //create the account with encrypted password
        let admin = await Admin.create({
            email:email,
            password:hashedPassword
        })
        res.json(admin)
    }
    catch(err){
        res.status(400).json({error:err})
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    try{

        // get credentials from user
        let {email, password}= req.body
        //find the account in mongo db
        let admin = await Admin.findOne({email:email})
        if(!admin){
            res.status(400).json({message:"Invalid Credentails"})
        }
        
        
        //check if the account's password matches with the user password
        let isPasswordCorrect= await bcrypt.compare(password,admin.password)
        
        //make token
        var token = jwt.sign({user:{email:admin.email, password:admin.password}}, secret);
        // if matches
        if(!isPasswordCorrect){
            
            res.status(400).json({message:"Invalid Credentials"})
        }
        else{
            res.send({token:token})
        }
    }
    catch(err){
        console.log(err)

        res.status(400).json({error:err})
    }
    })


router.post("/getuserbytoken",(req,res)=>{
    ///get token from req
        let {token}= req.body
        // verify the token details
        let admin= jwt.verify(token, secret)
        //send the decoded token details
        res.send(admin)

    })
    module.exports=router
