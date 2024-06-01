const ClubCommittee = require("../../models/ClubCommitteeModel");

const createCC =  (async (req,res)=>{
    console.log(req.body);
    const {
        name,
        description,
        email,
    } = req.body;

    try{
        const newClubCommitee = await ClubCommittee.create({
            name,
            description,
            email,
        })
        res.status(200).json(newClubCommitee);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/createCC.js");
        console.log(error);
        res.status(400).json({message :error.message});
    }
})

module.exports = createCC;