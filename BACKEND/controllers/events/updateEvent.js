const Event = require("../../models/eventModel");

const updateEvent =  (async (req,res)=>{
    const curEvent = await Event.findById(req.params.id);
    try{
        if(!curEvent){
            throw new Error("Event not Found.");    
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedEvent);
    }
    catch(error){
        console.log("this error is coming from controllers/events/updateEvent");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = updateEvent;