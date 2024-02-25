const { createHmac,randomBytes } = require('crypto');

const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    uid:{
        type:String,
        require:true,
    },
   email:{
    type:String,
    unique:true,
    required:true
   },
   image:{
    type:String, 
    require:true,
    default:"https://th.bing.com/th/id/OIP.9OLanwqz0biqN8b9QijRqwHaHV?rs=1&pid=ImgDetMain"
   },
   name:{
    type:String,
    require:true
   }

   

},{timestamps:true}
)


module.exports =model('User',UserSchema)