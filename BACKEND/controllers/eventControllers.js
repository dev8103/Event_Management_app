
const getEvents = (req,res)=>{
    res.json({message:"Get all events"});
}

const getEventbyId = (req,res)=>{
    res.json({message:`Get event for ${req.params.id}`});
}

const createEvent = (req,res)=>{
    console.log(req.body);
    const {name,venue,singer} = req.body;
    if(!name || !venue || !singer){
        res.status(400);
        throw new Error("All fields are mendatory.");
    }
    res.json({message:"Create event"});
}

const updateEvent = (req,res)=>{
    res.json({message:`Update event for ${req.params.id}`});
}

const deleteEvent = (req,res)=>{
    res.json({message:`Delete event for ${req.params.id}`});
}


module.exports = {
    getEvents,
    getEventbyId,
    createEvent,
    updateEvent,
    deleteEvent
};