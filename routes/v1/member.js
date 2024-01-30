const express= require("express")
const mongoose= require("mongoose")
const Member= require("../../models/Member")
const router= express()
const getmember= require("../../middlewares/getmember")
const { handleGetAllMembers,handleGetSingleMember,handleCreateMember,handleUpdateMember ,handleDeleteMember} = require("../../controllers/members")


//get all members
router.get("/all",handleGetAllMembers)

//get a particular member
router.get("/:id",getmember,handleGetSingleMember)

//Create members -> admin authentication required
router.post("/create",handleCreateMember)


// update any info of member
router.patch("/:id",handleUpdateMember)

// delete any member
router.delete("/:id",getmember, handleDeleteMember)
module.exports= router