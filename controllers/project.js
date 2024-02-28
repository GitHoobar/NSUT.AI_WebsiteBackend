const Project = require('../models/project');


// To get all projects
exports.getAllProjects = async (req,res)=>{
    try{
        const projects = await Project.find()
        res.json(projects)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


// To create a new project
exports.addProject = async (req, res, next)=> {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        department: req.body.department,
        github: req.body.github,
        imageURL: req.body.imageURL,
        contributors : req.body.contributors 
        })

    try{
        const newProject = await project.save()
        res.status(201).json({new:newProject, success:true})
    }catch(error){
        res.status(400).json({message: error.message})
    }
  }



// To get one project
exports.getOneProject = async(req,res, next)=> {
    res.send(res.project)
}


// To update a project 
exports.updateProject = async(req,res,next) => {
    if (req.body.title!=null){
        res.project.title = req.body.title
    }
    if (req.body.description!=null){
        res.project.description = req.body.description
    }
    if (req.body.department!=null){
        res.project.department = req.body.department
    }
    if (req.body.github!=null){
        res.project.github = req.body.github
    }
    if (req.body.imageURL!=null){
        res.project.imageURL = req.body.imageURL
    }
    if (req.body.contributors!=null){
        res.project.contributors = req.body.contributors
    }


    try{
        const updatedProject = await res.project.save()
        res.json({updatedProject, success:true})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


//To delete a project
exports.deleteProject= async (req,res)=>{
    try{
        await Project.deleteOne({ _id: req.params.id })
        res.json({message: 'Deleted project', success:true})
    } catch (error){
        res.status(500).json({message: error.message})
    }
}



