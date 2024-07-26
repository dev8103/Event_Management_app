const Event = require("../../models/eventModel");
const clubcommittee = require('../../models/ClubCommitteeModel');

const getEventbycc = async (req,res)=>{
    try{
        const email = req.userData.email;

        const curCC = await clubcommittee.findOne({email});
        try{
            if(curCC == null){
                res.status(401);
                throw new Error("User not Authrised.");
            }
        }
        catch(error){
            console.log("This error is coming from getEventscc.js/auth part");
            console.log(error);
            return res.status(401).json({message:error.message});

        }

        // console.log(email);
        const curEvents = await Event.find({clubCommitteeEmail:email});
        if(!curEvents){
            // res.status(400);
            throw new Error("No data found.");
        }
        else{
            return res.status(200).json(curEvents);
        }
    }   
    catch(error){
        console.log("this error is coming from controllers/events/getEventbycc");
        console.log(error);
        return res.status(404).json({message :error.message});
    }
}

module.exports = getEventbycc;