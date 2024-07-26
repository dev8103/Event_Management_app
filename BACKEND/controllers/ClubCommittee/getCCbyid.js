const ClubCommittee = require("../../models/ClubCommitteeModel");

const getCCbyid =  (async (req,res)=>{
    const curClubCommittee = await ClubCommittee.findById(req.params.id);
    try{
        if(!curClubCommittee){
            throw new Error("Club/Committee not Found.");    
        }

        return res.status(200).json(curClubCommittee);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/getCCbyid.js");
        console.log(error);
        return res.status(404).json({message :error.message});
    }
})

module.exports = getCCbyid;