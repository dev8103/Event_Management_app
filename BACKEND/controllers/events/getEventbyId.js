const Event = require("../../models/eventModel");

const getEventbyId =  (async (req,res)=>{
    const curEvent = await Event.findById(req.params.id);
    console.log(curEvent);
    try{
        if(!curEvent){
            throw new Error("Event not Found.");    
        }

        res.status(200).json(curEvent);
    }
    catch(error){
        console.log("this error is coming from controllers/events/getEventbuId");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = getEventbyId;