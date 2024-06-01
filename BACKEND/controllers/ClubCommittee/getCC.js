const ClubCommittee = require("../../models/ClubCommitteeModel");

const getCC =  (async (req,res)=>{
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