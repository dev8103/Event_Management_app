const Event = require("../../models/eventModel");

const createEvent =  (async (req,res)=>{
    console.log(req.body);
    const {
        name,
        description,
        eventOrganiser,
        startTime,
        endTime,
        isOnline,
        meetingLink,
        venue,
        mainGuest,
        sponsors,
        maxCapacity,
        coordinators} = req.body;

    try{
        const newEvent = await Event.create({
            name,
            description,
            eventOrganiser,
            startTime,
            endTime,
            isOnline,
            meetingLink,
            venue,
            mainGuest,
            sponsors,
            maxCapacity,
            coordinators,
        })
        res.status(200).json(newEvent);
    }
    catch(error){
        console.log("this error is coming from controllers/events/createEvent");
        console.log(error);
        res.status(400).json({message :error.message});
    }
})

module.exports = createEvent;