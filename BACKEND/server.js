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
// student
const signupStudent = require("./controllers/students/signupStudent");
const loginStudent = require("./controllers/students/loginStudent");
const getStudent = require("./controllers/students/getStudent");
const verifyOtp = require('./controllers/students/verifyOtp');
// mailer
const sendMail = require("./mailer/mailer");

// routes

// events
app.get("/events/get",getEvents);
app.get("/events/getbyid/:id",getEventbyId);
app.post("/events/create",createEvent);
app.put("/events/update/:id",updateEvent);
app.delete("/events/delete/:id",deleteEvent);
// ClubCommittee
app.get("/cc/get",getCC);
app.get("/cc/getbyid/:id",getCCbyid);
app.post("/cc/create",createCC);
app.put("/cc/update/:id",updateCC);
app.delete("/cc/delete/:id",deleteCC);
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