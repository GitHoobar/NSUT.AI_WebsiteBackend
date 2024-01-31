const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: true
    },
    github: {
         type: String, 
         required: false 
    },
    image: {
         type: String,
          required: false 
    },
    contributors: { 
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }], 
        required: false
     },
    Date:{
        required:true,
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Project", projectSchema)
