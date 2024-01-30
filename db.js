const mongoose= require("mongoose")
require("dotenv").config()
const Connection_Uri= process.env.MONGO_URI
const ConnectToMongoose=async()=>{
    mongoose.connect(Connection_Uri)
    mongoose.connection.once("open",()=>{
        console.log("connected successfully")
    })
    mongoose.connection.on("error",(err)=>{
        console.log(err)
    })
}
module.exports = ConnectToMongoose