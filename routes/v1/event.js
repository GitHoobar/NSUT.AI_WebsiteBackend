const express = require('express')
const router = express.Router()
const { getAllEvents, middleWare, getSingleEvent, createEvent, updateEvent, deleteOneEvent, deleteAllEvents } = require("../../controllers/event");
//GETTING ALL ENTRIES
router.get('/all', async (req, res) => {
    getAllEvents(req, res)
})

//GETTING A SINGLE ENTRY
router.get('/:id', middleWare, (req, res) => {
    getSingleEvent(req, res)
})

//CREATING A NEW ENTRY
router.post('/create', async (req, res) => {
    createEvent(req, res)
})

//UPDATING A ENTRY
router.patch('/:id', middleWare, async (req, res) => {
    updateEvent(req, res)
})

//REMOVING THE EVENT
router.delete('/:id', async (req, res) => {
    deleteOneEvent(req, res)
})

//REMOVING ALL EVENTS
router.delete('/', async (req, res) => {
    deleteAllEvents(req, res)
})


module.exports = router