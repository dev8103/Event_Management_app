const ClubCommittee = require("../../models/ClubCommitteeModel");
const sbg = require('../../models/sbgModel');

const getCC =  (async (req,res)=>{

    const email = req.userData.email;
    try{
        const curSbg = await sbg.findOne({email});
        if(!curSbg){
            throw new Error("User is not authorised.");
        }
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/getCC.js authorisation part");
        console.log(error);
        res.status(401).json({message :error.message});
    }

    try{
        const ClubCommittees = await ClubCommittee.find();
        res.status(200).json(ClubCommittees);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/getCC.js");
        console.log(error);
        res.status(400).json({message :error.message});
    }
});

module.exports = getCC;