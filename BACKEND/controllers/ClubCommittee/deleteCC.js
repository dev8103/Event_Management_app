const ClubCommittee = require("../../models/ClubCommitteeModel");


const deleteCC =  (async (req,res)=>{
    const curClubCommittee = await ClubCommittee.findById(req.params.id);
    try{
        if(!curClubCommittee){
            throw new Error("Club/Committee not Found.");    
        }

        const deletedClubCommittee = await ClubCommittee.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedClubCommittee);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/deleteCC.js");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = deleteCC;