const bcrypt = require('bcrypt');
const studentModel = require("../../models/studentModel");
const otpModel = require('../../models/otpModel');

const changePasswordStudent = (async (req,res)=>{

    const email = req.body.email;
    const otp_number = req.body.otp;
    
    const data = await otpModel.findOne({email});
    try{
        if(!data){
            throw new Error("Email is invalid or OTP expired.");
        }
    }
    catch(err){
        console.log("This error is coming from student/updateForgotPassword.js otp existance part");
        return res.status(500).json({message:err.message});
    }
    
    const hashed_otp = data.otp_number;
    const match = await bcrypt.compare(otp_number,hashed_otp);
    try{
        if(!match){
            throw new Error("OTP is invalid");
        }
    }
    catch(err){
        console.log("This error is coming from student/updateForgotPassword.js otp validation");
        return res.status(500).json({message:err.message});
    }
    
    // update to new password
    const newPassword = req.body.password;
    try{
        const newHashedPassword = await bcrypt.hash(newPassword,10);
        const filter = {email};
        const update = {password:newHashedPassword};
        const updatedStudent = await studentModel.findOneAndUpdate(filter,update,{new:true});
        return res.status(200).json({message:"Password changed successfully."});
    }
    catch(error){
        console.log("This error is coming from students/changepassword.js change part");
        return res.status(400).json({message:error.message});
    }

});

module.exports = changePasswordStudent;