const Event = require("../../models/eventModel");
const clubcommittee = require('../../models/ClubCommitteeModel');

const getEventbycc = async (req,res)=>{
    const now = new Date();
    try{
        const upcomingEvents = await Event.find({startTime: { $gt: now },});
        if(!upcomingEvents){
            throw new Error("Upcoming events not found.");
        }
        return res.status(200).json(upcomingEvents);
    }   
    catch(error){
        console.log("this error is coming from controllers/events/getUpcomingEvents");
        console.log(error);
        return res.status(404).json({message :error.message});
    }
}

module.exports = getEventbycc;