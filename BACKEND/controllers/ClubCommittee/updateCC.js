const ClubCommittee = require("../../models/ClubCommitteeModel");

const updateCC =  (async (req,res)=>{
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