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

const getEvents = require("./controllers/events/getEvents");
const createEvent = require("./controllers/events/createEvent");
const getEventbyId = require("./controllers/events/getEventbyId");
const updateEvent = require("./controllers/events/updateEvent");
const deleteEvent = require("./controllers/events/deleteEvent");

// routes

// events
app.get("/cc/events/get",getEvents);
app.get("/cc/events/getbyid/:id",getEventbyId);
app.post("/cc/events/create",createEvent);
app.put("/cc/events/update/:id",updateEvent);
app.delete("/cc/events/delete/:id",deleteEvent);


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