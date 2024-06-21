const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const student = require('../../models/studentModel');

const loginStudent = async (req,res)=>{
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
        console.log("This error is coming from loginStudent.js/field part");
        console.log(error);
        res.status(401).json({message:error.message});
        return;
    }

    // validation part
    const curStudent = await student.findOne({email});
    try{
        if(curStudent == null){
            // return res.status(400).json({message:"Please enter valid email address."});
            res.status(401);
            throw new Error("Please enter valid email address.");
        }
    }
    catch(error){
        console.log("This error is coming from loginStudent.js/validation part");
        console.log(error);
        res.status(401).json({message:error.message});
        return;
    }

    // verification part
    // console.log(curStudent);
    try{
        if(curStudent.isverified == false){
            // return res.status(400).json({message:"Please verify your email address."});
            res.status(401);
            throw new Error("Please verify your email address first.");
        }
    }
    catch(error){
        console.log("This error is coming from loginStudent.js/verification part");
        console.log(error);
        res.status(401).json({message:error.message});
        return;
    }
    
    // password verification part
    const hashedpassword = curStudent.password;
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
                    name : curStudent.name,
                    email : curStudent.email,
                },
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15m"}
        );
        return res.status(200).json({accessToken});
    }
    catch(error){
        console.log("This error is coming from loginStudent.js/password verification part");
        console.log(error);
        res.status(401).json({message:error.message});
        return;
    }

};

module.exports = loginStudent;