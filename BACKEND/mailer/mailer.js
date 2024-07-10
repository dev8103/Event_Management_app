const nodemailer = require("nodemailer");
require('dotenv').config();


const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: '587',
    // secure:'true', 
    auth: {
        user: process.env.MAIL,
        pass: process.env.PSWD,
    }
});

mailTransporter.verify((error, success) => {
    if (error) 
        console.log(error);

    console.log("Mailer is ready to send emails.");
});

const signup = (async (email, otp) => {

    let mailDetails = {
        from: 'Events at DAIICT',
        to: email,
        subject: 'Welcome to Events@DAIICT',
        text:`OTP for the verification of your mail is ${otp}.`,
    };
    
    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occur in mailer.js/signup');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    // console.log("oooo");
})

const forgotPasswordEmail = (async (email, otp) => {

    let mailDetails = {
        from: 'Events at DAIICT',
        to: email,
        subject: 'Verification for password reset',
        text:`OTP for the verification of your mail is ${otp}.`,
    };
    
    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occur in mailer.js/signup');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    // console.log("oooo");
})

module.exports = {signup,forgotPasswordEmail};