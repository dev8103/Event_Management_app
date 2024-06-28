const Event = require("../../models/eventModel");

const getEventbycc = async (req,res)=>{
    try{
        const email = req.userData.email;
        // console.log(email);
        const curEvents = await Event.find({clubCommitteeEmail:email});
        if(!curEvents){
            // res.status(400);
            throw new Error("No data found.");
        }
        else{
            res.status(200).json(curEvents);
        }
    }   
    catch(error){
        console.log("this error is coming from controllers/events/getEventbycc");
        console.log(error);
        res.status(404).json({message :error.message});
    }
}

module.exports = getEventbycc;