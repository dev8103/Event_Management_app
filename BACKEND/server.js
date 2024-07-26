// built in modules
const express = require("express");
const cors = require('cors');
const multer = require('multer');
const dotenv = require("dotenv").config();

// database connection
const connectDB = require("./config/dbConnection");
connectDB();

// variables
const app = express();
const port = process.env.PORT || 5000;

let corsOptions = {
    origin : "*",
}

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// functions

// sbg
const loginSbg = require("./controllers/sbg/loginSbg");

// events
const getEvents = require("./controllers/events/getEvents");
const createEvent = require("./controllers/events/createEvent");
const getEventbyId = require("./controllers/events/getEventbyId");
const getEventbycc = require("./controllers/events/getEventbycc");
const getPastEvents = require('./controllers/events/getPastEvents');
const getUpcomingEvents = require('./controllers/events/getUpcomingEvents');
const getOnlineEvents = require('./controllers/events/getOnlineEvents');
const getOfflineEvents = require('./controllers/events/getOfflineEvents.js');
const updateEvent = require("./controllers/events/updateEvent");
const deleteEvent = require("./controllers/events/deleteEvent");
const registerOnEvent = require('./controllers/events/registerOnEvent.js');
// clubcommittee
const getCC = require("./controllers/ClubCommittee/getCC");
const getCCbyid = require("./controllers/ClubCommittee/getCCbyid");
const createCC = require("./controllers/sbg/createCC");
const updateCC = require("./controllers/sbg/updateCC");
const deleteCC = require("./controllers/sbg/deleteCC");
const loginCC = require("./controllers/ClubCommittee/loginCC");
// student
const signupStudent = require("./controllers/students/signupStudent");
const loginStudent = require("./controllers/students/loginStudent");
const profileStudent = require("./controllers/students/profileStudent");
const updateprofileStudent = require("./controllers/students/updateProfileStudent");
const verifyOtp = require('./controllers/students/verifyOtp');
const verifyEmail = require('./controllers/students/verifyEmail');
const changePasswordStudent = require('./controllers/Password/changePasswordStudent.js');
const forgotPasswordStudent = require('./controllers/Password/forgotPasswordStudent.js');
const updateForgotPassword = require('./controllers/Password/updateForgotPasswordStudent.js');


// mailer
const sendMail = require("./mailer/mailer");
// middleware
const auth = require("./middleware/auth");

// routes

// sbg
app.post("/sbg/login",loginSbg);
// events
app.get("/events/get", getEvents);
app.get("/events/getbyid/:id", getEventbyId);
app.get("/events/getbycc", auth, getEventbycc);
app.post("/events/create", auth, createEvent);
app.get("/events/get/past", getPastEvents);
app.get("/events/get/upcoming", getUpcomingEvents);
app.get("/events/get/online", getOnlineEvents);
app.get("/events/get/offline", getOfflineEvents);
app.post("/events/update/:id", auth, updateEvent);
app.get("/events/delete/:id", auth, deleteEvent);
app.get("/events/register/:id", auth, registerOnEvent);

// ClubCommittee
app.get("/cc/get", auth, getCC);
app.get("/cc/getbyid/:id", auth, getCCbyid);
app.post("/cc/create", auth, createCC);
app.post("/cc/update/:id", auth, updateCC);
app.get("/cc/delete/:id", auth, deleteCC);
app.post("/cc/login",loginCC);
// student
app.post("/student/signup",signupStudent);
app.post("/student/login",loginStudent);
app.get("/student/profile", auth, profileStudent);
app.post("/student/updateprofile/:id", auth, updateprofileStudent);
app.post('/student/verifyotp',verifyOtp);
app.post('/student/verifyemail',verifyEmail);
app.post('/student/changepassword', auth, changePasswordStudent);
app.post('/student/forgotpassword', forgotPasswordStudent);
app.post('/student/updateforgotpassword',updateForgotPassword);


// invalid urls handling..
app.all('*',(req,res)=>{
    res.status(404);
    res.json({message:'Oops, page not found'});
    res.send();
});



// server listening
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});