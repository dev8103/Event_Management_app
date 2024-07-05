const Event = require("../../models/eventModel");
const clubcommittee = require('../../models/ClubCommitteeModel');

const getEventbycc = async (req,res)=>{
    const now = new Date();
    try{
        const pastEvents = await Event.find({endTime: { $lt: now },});
        if(!pastEvents){
            throw new Error("Past events not found.");
        }
        res.status(200).json(pastEvents);
    }   
    catch(error){
        console.log("this error is coming from controllers/events/getPastEvents");
        console.log(error);
        res.status(404).json({message :error.message});
    }
}

module.exports = getEventbycc;