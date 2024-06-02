const ClubCommittee = require("../../models/ClubCommitteeModel");
const sbg = require('../../models/sbgModel');


const updateCC =  (async (req,res)=>{

    // authorised only for sbg
    const sbgemail = req.userData.email;
    console.log(sbgemail);

    try{
        const isExist = await sbg.findOne({email:sbgemail});
        console.log(isExist);
        if(isExist == null){
            res.status(401);
            throw new Error("User is unauthorised.");
        }
    }
    catch(error){
        console.log("this error is coming from controllers/sbg/updateCC.js");
        console.log(error);
        return res.status(401).json({message :error.message});
    }

    const curClubCommittee = await ClubCommittee.findById(req.params.id);
    try{
        if(!curClubCommittee){
            throw new Error("Club/Committee not Found.");    
        }

        const updatedClubCommittee = await ClubCommittee.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedClubCommittee);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/updateCC.js");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = updateCC;