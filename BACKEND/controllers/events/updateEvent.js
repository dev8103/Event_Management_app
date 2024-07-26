const Event = require("../../models/eventModel");
const clubcommittee = require('../../models/ClubCommitteeModel');


const updateEvent =  (async (req,res)=>{

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
        console.log("this error is coming from controllers/events/updateEvent.js");
        console.log(error);
        return res.status(401).json({message :error.message});
    }

    const curEvent = await Event.findById(req.params.id);
    try{
        if(!curEvent){
            throw new Error("Event not Found.");    
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json(updatedEvent);
    }
    catch(error){
        console.log("this error is coming from controllers/events/updateEvent");
        console.log(error);
        return res.status(404).json({message :error.message});
    }
})

module.exports = updateEvent;