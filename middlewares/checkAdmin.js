const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const Admin = require("../models/admin")
const secret= "KHUSHAL"
const checkAdmin= async(req,res,next)=>{
    try{
    const token= req.header("token")
    console.log(token)  
    //decoding the token
    const decodedinfo = await jwt.verify(token,secret)
    //finding an admin corresponding to id
    let admin = await Admin.findById(decodedinfo.admin.id)
    if(admin){
        res.admin= admin
    }
    }
    catch(err){
        console.log("error")
        
    }
    next()
}
module.exports= checkAdmin