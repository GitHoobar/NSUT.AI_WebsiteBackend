const mongoose= require("mongoose")

const blogSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    publishedDate:{
        type:Date,
        default:Date.now
    },
    comments:{
        type:[
            { 
                user:{type:mongoose.Schema.Types.ObjectId,ref:"Member"},
                comment:String,
                _id:false  
                
            }
        ],
        require:false
    },
    slug:{type:String, require:true,unique:true},
    description:{type:String, require:true}
},{timestamps:true})



module.exports= mongoose.model("Blog",blogSchema) 