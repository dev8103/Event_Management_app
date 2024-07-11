const nodemailer = require("nodemailer");
const studentModel = require("../models/studentModel");
const moment = require('moment');

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

const NewEventCreated = (async (email, name, description, startTime, endTime, venue) => {

    const curStudent = await studentModel.findOne({email});
    const startDate = moment(startTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    const endDate = moment(endTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    
    let mailDetails = {
        from: 'Events at DAIICT',
        to: email,
        subject: `New Event : ${name}`,
        text: `Hello ${curStudent.username},Hope you are doing well. A new event is listed on Events@DAIICT.Check it out and make sure you register.
            \nEvent Details:
            Name: "${name}",
            Description: "${description}",
            Start Time: "${startDate}",
            End Time: "${endDate}",
            Venue: "${venue || 'Online'}",
            Best regards,
            Events at DAIICT.`,
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

module.exports = {signup,forgotPasswordEmail,NewEventCreated};