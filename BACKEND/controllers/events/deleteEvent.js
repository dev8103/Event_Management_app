const Event = require("../../models/eventModel");


const deleteEvent =  (async (req,res)=>{
    const curEvent = await Event.findById(req.params.id);
    try{
        if(!curEvent){
            throw new Error("Event not Found.");    
        }

        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEvent);
    }
    catch(error){
        console.log("this error is coming from controllers/events/deleteEvent");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = deleteEvent;