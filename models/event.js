const mongoose=require('mongoose')

const eventSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 date:{
    type:Date,
    required:true,
    default:Date.now
 },
 venue:{
    type:String,
    required:true,
 },
 image:{
    type:String,
    required:true
 },
 status:{
    type:Boolean,
    required:true,
    default:false
 },
 
})

module.exports=mongoose.model('event',eventSchema)