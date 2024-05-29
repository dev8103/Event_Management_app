// asyncHandler is a better way to find errors in async promise
// so we dont have to write try catch block in every controllers.
const asyncHandler = require("express-async-handler");

const getEvents = asyncHandler (async (req,res)=>{
    res.json({message:"Get all events"});
});

const getEventbyId = asyncHandler (async (req,res)=>{
    res.json({message:`Get event for ${req.params.id}`});
})

const createEvent = asyncHandler (async (req,res)=>{
    console.log(req.body);
    const {name,venue,singer} = req.body;
    if(!name || !venue || !singer){
        res.status(400);
        throw new Error("All fields are mendatory.");
    }
    res.json({message:"Create event"});
})

const updateEvent = asyncHandler (async (req,res)=>{
    res.json({message:`Update event for ${req.params.id}`});
})

const deleteEvent = asyncHandler (async (req,res)=>{
    res.json({message:`Delete event for ${req.params.id}`});
})


module.exports = {
    getEvents,
    getEventbyId,
    createEvent,
    updateEvent,
    deleteEvent
};