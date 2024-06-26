const Event = require("../../models/eventModel");
const clubcommittee = require('../../models/ClubCommitteeModel');

const createEvent =  (async (req,res)=>{
    
    // authorised only for club/committee.
    const clubCommitteeEmail = req.userData.email;
    console.log(clubCommitteeEmail);
    
    try{

        const isExist = await clubcommittee.findOne({email:clubCommitteeEmail});
        console.log(isExist);
        if(clubCommitteeEmail!=='sbg@daiict.ac.in' && isExist == null){
            res.status(401);
            throw new Error("User is unauthorised.");
        }
    }
    catch(error){
        console.log("this error is coming from controllers/events/createEvent");
        console.log(error);
        return res.status(401).json({message :error.message});
    }

    
    // console.log(clubCommitteeEmail);
    // console.log(req.userData);
    // console.log(req.body);
    const {
        name,
        description,
        // eventOrganiser,
        startTime,
        endTime,
        isOnline,
        meetingLink,
        venue,
        mainGuest,
        sponsors,
        maxCapacity,
        coordinators,
        } = req.body;
    
    try{
        if (!isOnline && venue) {
            const now = new Date();
            const overlappingEvents = await Event.find({
                venue,
                endTime: { $gt: now }, // Exclude past events
                $or: [
                    { startTime: { $lt: endTime }, endTime: { $gt: startTime } },
                    { startTime: { $gte: startTime, $lt: endTime } },
                    { endTime: { $gt: startTime, $lte: endTime } }
                ]
            });

            if (overlappingEvents.length > 0) {
                throw new Error("The venue is already booked for the selected time range.");
            }
        }

        const newEvent = await Event.create({
            name,
            description,
            // eventOrganiser,
            clubCommitteeEmail,
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
        return res.status(400).json({message :error.message});
    }
})

module.exports = createEvent;