const Event=require('../models/event')


exports.getAllEvents = async(req,res)=>{
     try {
       const event = await Event.find();
       res.json(event);
     } catch (error) {
       res.json({ message: error.message });
     }
}

exports.getSingleEvent= async(req,res)=>{
    res.send(res.event)
}

exports.createEvent=async(req,res)=>{
    const event = new Event({
      Title: req.body.Title,
      Description: req.body.Description,
      Date: req.body.Date,
      Venue: req.body.Venue,
      Image: req.body.Image,
      Status: req.body.Status
    });
    try{
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch(error){
        res.status(400).json({message:error.message})
    }
}

exports.updateEvent= async(req,res)=>{
     if (req.body.Title != null) {
       res.event.Title = req.body.Title;
     }
     if (req.body.Description != null) {
        res.event.Description = req.body.Description;
      }
     if (req.body.Date != null) {
         res.event.Date = req.body.Date;
       }
     if (req.body.Venue != null) {
          res.event.Venue = req.body.Venue;
        }
     if (req.body.Image != null) {
           res.event.Image = req.body.Image;
         }
     if (req.body.Status != null) {
            res.event.Status = req.body.Status;
          }
     try{
        const updatedEvent=await res.event.save();
        res.json(updatedEvent);
     }     catch(error){
        res.status(400).json({message:error.message})
     }

}

exports.deleteOneEvent=async(req,res)=>{
    try{
        await Event.deleteOne({_id:req.params.id})
        res.json({message:"Deleted Event"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.deleteAllEvents=async(req,res)=>{
    try{
        await Event.deleteMany();
        res.json({message:'Deleted All Events '})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


exports.middleWare= async(req,res,next)=>{
    let event;
    try{
        event=await Event.findById(req.params.id);
        if(event==null){
            return req.status(404).json({message:"Cannot find Events"})
        }
    }   catch{
        res.status(500);
    }
    res.event=event;
    next();
}