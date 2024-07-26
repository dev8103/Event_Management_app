const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const sbg = require('../../models/sbgModel');

const loginSbg = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    // field part
    try{
        if(!email || !password){
            // return res.status(400).json({message:"All fields are mendatory."});
            res.status(400);
            throw new Error("All Fields are mendatory.");
        }
    }
    catch(error){
        console.log("This error is coming from loginCC.js/field part");
        console.log(error);
        res.status(401).json({message:error.message});
        return;
    }

    // validation part
    const curSbg = await sbg.findOne({email});
    try{
        if(curSbg == null){
            // return res.status(400).json({message:"Please enter valid email address."});
            res.status(401);
            throw new Error("Please enter valid email address.");
        }
    }
    catch(error){
        console.log("This error is coming from loginCC.js/validation part");
        console.log(error);
        return res.status(401).json({message:error.message});
    }
    
    // password verification part
    const hashedpassword = curSbg.password;
    try{    
        const match = await bcrypt.compare(password,hashedpassword);
        
        if(!match){
            // return res.json(400).json({message:"Please enter valid password."});
            res.status(401);
            throw new Error("Please enter valid password.");
        }

        const accessToken = jwt.sign(
            {
                user:{
                    name : curSbg.name,
                    email : curSbg.email,
                },
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn:"60m"}
        );

        const data = {
            accessToken,
            type:"sbg"
        };

        return res.status(200).json(data);
    }
    catch(error){
        console.log("This error is coming from loginCC.js/password verification part");
        console.log(error);
        return res.status(401).json({message:error.message});
    }

};

module.exports = loginSbg;