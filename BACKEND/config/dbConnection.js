const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ",connect.connection.name);
        // console.log("Connected to Mongo-DB");
    }
    catch(error){
        console.log("This error is Coming from config/dbConnection.js");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;