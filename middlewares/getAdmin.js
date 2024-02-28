const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const Admin = require("../models/admin")
const secret= "KHUSHAL"
const getAdmin= async(req,res,next)=>{
    try{
        const token= req.header("token")
        if(!token){
            res.status(400).json({success:false, error:"Token Not Found"})
        }
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
        console.log("error: ",err)
        res.status(400).json({error:"Internal Server Error"})
        return;
    }
    next()
}
module.exports= getAdmin