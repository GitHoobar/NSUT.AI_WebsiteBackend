const Project= require("../models/project")
exports.getproject = async (req,res,next)=>{
    try{
        project = await Project.findById(req.params.id).populate("contributors")
        if (project==null){
            return res.status(404).json({message: 'Project not found'})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }

    res.project= project
    next()
}