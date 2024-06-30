const Event = require("../../models/eventModel");

const getEvents =  (async (req,res)=>{
    const events = await Event.find();
    try{
        if(!events){
            throw new Error("No data found.");
        }
        res.status(200).json(events);
    }
    catch(error){
        console.log("This error is coming from events/getEvents");
        res.status(400).json({message:error.message});
    }
});

module.exports = getEvents;