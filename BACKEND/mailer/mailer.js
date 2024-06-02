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
    if (error) console.log(error);
    console.log("Server is ready to take our messages");
});


// const sendMail = async (req,res)=>{
//     let mailDetails = {
//         from: 'Events at Daiict',
//         to: 'devhingu8103@gmail.com',
//         subject: 'Account Login Notification',
//         text:'This mail is sent to you for testing purpose',
//     };
    
    
//     const mail = await mailTransporter.sendMail(mailDetails, (error, data) => {
//         if (error) {
//             console.log("This error is coming from mailer/mailer.js");
//             console.log(error);
//         }
//         else{
//             console.log('Message sent: %s', data.messageId);
//         }
//     });
// }

const signup = (async (email, otp) => {

    let mailDetails = {
        from: 'Events at DAIICT',
        to: email,
        subject: 'Verification of email',
        text:`OTP for the verification of your mail is ${otp}.`,
    };

    console.log(otp);

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

module.exports = {signup};