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
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      venue: req.body.venue,
      image: req.body.image,
      status: req.body.status
    });
    try{
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch(error){
        res.status(400).json({message:error.message})
    }
}

exports.updateEvent= async(req,res)=>{
     if (req.body.title != null) {
       res.event.title = req.body.title;
     }
     if (req.body.description != null) {
        res.event.description = req.body.description;
      }
     if (req.body.date != null) {
         res.event.date = req.body.date;
       }
     if (req.body.venue != null) {
          res.event.venue = req.body.venue;
        }
     if (req.body.image != null) {
           res.event.image = req.body.image;
         }
     if (req.body.status != null) {
            res.event.status = req.body.status;
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