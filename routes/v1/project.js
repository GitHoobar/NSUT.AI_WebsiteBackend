const express= require('express');
const router = express.Router();
const { getAllProjects, addProject, getOneProject, updateProject, deleteProject} = require('../../controllers/project');
const { getproject } = require('../../middlewares/getproject');

router.use(express.json());

//for url localhost::3000/projects/
router.get('/', getAllProjects);
router.post('/create',addProject);

//for url localhost::3000/projects/id
router.get('/:id' , getproject, getOneProject);
router.patch('/:id' , getproject, updateProject);
router.delete('/:id', getproject, deleteProject);



module.exports = router