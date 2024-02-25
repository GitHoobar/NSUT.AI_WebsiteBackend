const express= require('express');
const router = express.Router();
const { getAllProjects, addProject, getOneProject, updateProject, deleteProject} = require('../../controllers/project');
const { getproject } = require('../../middlewares/getproject');
const getAdmin= require("../../middlewares/getAdmin")
router.use(express.json());

//for url localhost::3000/projects/
router.get('/all', getAllProjects);
router.post('/create',getAdmin,addProject);

//for url localhost::3000/projects/id
router.get('/:id' , getproject, getOneProject);
router.patch('/:id' ,getAdmin, getproject, updateProject);
router.delete('/:id',getAdmin, getproject, deleteProject);



module.exports = router