const bcrypt = require('bcrypt');

const ClubCommittee = require("../../models/ClubCommitteeModel");
const sbg = require('../../models/sbgModel');

const createCC =  (async (req,res)=>{

    // authorised only for sbg
    const sbgemail = req.userData.email;
    // console.log(sbgemail);

    try{
        const isExist = await sbg.findOne({email:sbgemail});
        // console.log(isExist);
        if(isExist == null){
            res.status(401);
            throw new Error("User is unauthorised.");
        }
    }
    catch(error){
        console.log("this error is coming from controllers/sbg/createCC.js");
        console.log(error);
        return res.status(401).json({message :error.message});
    }

    console.log(req.body);
    const {
        name,
        description,
        email,
        password,
    } = req.body;

    try{
        const hashedpassword = await bcrypt.hash(password,8);
        const newClubCommitee = await ClubCommittee.create({
            name,
            description,
            email,
            password:hashedpassword,
        })
        return res.status(200).json(newClubCommitee);
    }
    catch(error){
        console.log("this error is coming from controllers/ClubCommittee/createCC.js");
        console.log(error);
        return res.status(400).json({message :error.message});
    }
})

module.exports = createCC;