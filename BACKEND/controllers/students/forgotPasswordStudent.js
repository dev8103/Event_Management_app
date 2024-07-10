const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

const student = require('../../models/studentModel');
const otp = require('../../models/otpModel');

const x = require('../../mailer/mailer');
const mailForForgotPassword = x.forgotPasswordEmail;

const forgotPassword = async (req,res)=>{
    const email = req.body.email;

    // check whether student signed up or not.
    const curStudent = await student.findOne({email});
    try{
        if(!curStudent){
            res.status(400);
            throw new Error("Please enter valid email address");
        }
    }
    catch(error){
        console.log("This error is coming from controllers/students/forgotpassword.js not signed up part");
        console.log(error);
        res.status(400).json({message:error.message});
        return;
    }

    const match = await otp.findOne({email});
    if(match){
        try{
            await otp.deleteOne({email});
            console.log("Document deleted successfully.");
        }
        catch(error){
            console.log("This error is coming from forgotpassword.js/match part");
            console.log("Error deleting document ",error);
            return res.status(500).json({message:"Internal server error"});
        }
    }

    try{
        const newotp_number = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        // console.log(newotp_number);

        const hashed_otp = await bcrypt.hash(newotp_number,8);
        console.log('hashed otp :',hashed_otp);
    
        const mailer = mailForForgotPassword(email,newotp_number);
        const newotp = await otp.create({
            email,
            otp_number:hashed_otp,
        })

        res.status(200).json({message:"Email sent successfully."});
    }
    catch(error){
        console.log('This error is coming from forgotPassword.js/mailer part.');
        console.log(error);
        return res.status(400).send();
    }
}

module.exports = forgotPassword;