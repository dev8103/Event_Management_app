const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

const student = require('../../models/studentModel');
const otp = require('../../models/otpModel');



const verifyEmail = async (req,res)=>{
    const email = req.body.email;
    const match = await otp.findOne({email});
    if(match){
        try{
            await otp.deleteOne({email});
            console.log("Document deleted successfully.");
        }
        catch(error){
            console.log("This error is coming from verifyEmail.js/match part");
            console.log("Error deleting document ",error);
            return res.status(500).json({message:"Internal server error"});
        }
    }

    try{
        const newotp_number = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        console.log(newotp_number);

        const hashed_otp = await bcrypt.hash(newotp_number,8);
        console.log('hashed otp :',hashed_otp);
    
        const mailer = mailforsignup(email,newotp_number);
        const newotp = await otp.create({
            email,
            otp_number:hashed_otp,
        })
    }
    catch(error){
        console.log('This error is coming from signupStudent.js/mailer part.');
        console.log(error);
        return res.status(400).send();
    }
}

module.exports = verifyEmail;