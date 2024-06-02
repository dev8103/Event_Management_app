// built in modules
const express = require("express");
const dotenv = require("dotenv").config();

// custom modules
const connectDB = require("./config/dbConnection");


// database connection
connectDB();

// variables
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(express.json());


// functions

// sbg
const loginSbg = require("./controllers/sbg/loginSbg");

// events
const getEvents = require("./controllers/events/getEvents");
const createEvent = require("./controllers/events/createEvent");
const getEventbyId = require("./controllers/events/getEventbyId");
const updateEvent = require("./controllers/events/updateEvent");
const deleteEvent = require("./controllers/events/deleteEvent");
// clubcommittee
const getCC = require("./controllers/ClubCommittee/getCC");
const getCCbyid = require("./controllers/ClubCommittee/getCCbyid");
const createCC = require("./controllers/ClubCommittee/createCC");
const updateCC = require("./controllers/ClubCommittee/updateCC");
const deleteCC = require("./controllers/ClubCommittee/deleteCC");
const loginCC = require("./controllers/ClubCommittee/loginCC");
// student
const signupStudent = require("./controllers/students/signupStudent");
const loginStudent = require("./controllers/students/loginStudent");
const getStudent = require("./controllers/students/getStudent");
const verifyOtp = require('./controllers/students/verifyOtp');


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
app.post("/events/create", auth, createEvent);
app.put("/events/update/:id", auth, updateEvent);
app.delete("/events/delete/:id", auth, deleteEvent);
// ClubCommittee
app.get("/cc/get", auth, getCC);
app.get("/cc/getbyid/:id", auth, getCCbyid);
app.post("/cc/create", auth, createCC);
app.put("/cc/update/:id", auth, updateCC);
app.delete("/cc/delete/:id", auth, deleteCC);
app.post("/cc/login",loginCC);
// student
app.post("/student/signup",signupStudent);
app.post("/student/login",loginStudent);
app.get("/student/get",getStudent);
app.post('/student/verifyotp',verifyOtp);

// app.get("/sendmail",sendMail);



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