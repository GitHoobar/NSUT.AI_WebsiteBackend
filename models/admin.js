const { createHmac,randomBytes } = require('crypto');

const {Schema,model} = require("mongoose")

const AdminSchema = new Schema({

   email:{
    type:String,
    unique:true,
    required:true
   },
   password:{
      type:String,
      required:true
   },
   username:{
      type:String,
      require:true
   }

},{timestamps:true}
)


module.exports =model('Admin',AdminSchema)