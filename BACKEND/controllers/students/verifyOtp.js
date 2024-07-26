const bcrypt = require('bcrypt');

const otp = require('../../models/otpModel');
const student = require('../../models/studentModel');

const verifyOtp = async (req,res)=>{
    try{
        const email = req.body.email;
        const otp_number = req.body.otp;
    
        const data = await otp.findOne({email});
        if(data == null){
            res.status(500);
            return res.json({message:"There is some problem in system, Please try again later."});
        }
    
        const hashedotp = data.otp_number;
        const match = await bcrypt.compare(otp_number,hashedotp);
        if(match){
            const curstudent = await student.findOneAndUpdate({email},{isverified:true});
            return res.status(200).json({message:"OTP verification successfull."});
        }
        else{
            return res.status(288).json({message:"OTP is Not Valid or Expired."});
        }
    }
    catch(error){
        console.log("This error is coming from verifyOtp.js");
        console.log(error);
        return res.status(400).send();
    }
}

module.exports = verifyOtp;