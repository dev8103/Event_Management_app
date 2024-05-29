// built in modules
const express = require("express");
const dotenv = require("dotenv").config();

// custom modules
const eventRoutes = require("./routes/eventRoutes");
const errorHandler = require("./middleware/errorHandlers");

// variables
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use("/api/events",eventRoutes);



// error Handler 
// it should be after the all routes else it will not work..
app.use(errorHandler);


// server listening
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});