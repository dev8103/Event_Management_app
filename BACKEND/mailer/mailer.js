const nodemailer = require("nodemailer");
// require('dotenv').config();

const sendMail = async (req,res)=>{
    
    const mailTransporter = await nodemailer.createTransport({
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
    
    
    let mailDetails = {
        from: 'Events at Daiict',
        to: 'devhingu8103@gmail.com, 05nirmalhalpati@gmail.com',
        subject: 'Account Login Notification',
        text:'This mail is sent to you for testing purpose',
    };
    
    
    const mail = await mailTransporter.sendMail(mailDetails, (error, data) => {
        if (error) {
            console.log("This error is coming from mailer/mailer.js");
            console.log(error);
        }
        else{
            console.log('Message sent: %s', data.messageId);
        }
    });
    
}

module.exports = sendMail;