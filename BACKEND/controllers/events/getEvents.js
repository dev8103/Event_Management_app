const Event = require("../../models/eventModel");

const getEvents =  (async (req,res)=>{
    const events = await Event.find();
    console.log(events);
    res.status(200).json(events);
    // res.json({message:"Get all events"});
});

module.exports = getEvents;