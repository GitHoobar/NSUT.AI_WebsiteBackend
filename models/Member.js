const mongoose= require("mongoose")
const MemberSchema= new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    bio:{
        type:String,
        require:false
    },
    image:{
        type:String,
        require:false
    },
    department:{
        type:[{type:String}],
        require:true
    },
    achievements:{
        type:[{type:String}],
        require:true
    },
    social:{
        type:{
            github:String,
            linkedin:String
        },
        _id:false
    },
    projects:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
          }],
          require:false,
    }
})

module.exports= mongoose.model("Member",MemberSchema)