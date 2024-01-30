const {Schema,model} = require("mongoose")

const blogSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    published_date:{
        type:Date,
        default:Date.now
    },
    comment:[{type:String}],
    description:{
        type:String,
        required:true
    }

},{timestamps:true})



module.exports= model("Blog",blogSchema) 