const mongoose=require('mongoose')

const eventSchema = new mongoose.Schema({
 Title:{
    type:String,
    required:true
 },
 Description:{
    type:String,
    required:true
 },
 Date:{
    type:String,
    required:true,
    default:Date.now
 },
 Venue:{
    type:String,
    required:true,
 },
 Image:{
    type:String,
    required:true
 },
 Status:{
    type:Boolean,
    required:true,
    default:false
 },
 
})

module.exports=mongoose.model('event',eventSchema)