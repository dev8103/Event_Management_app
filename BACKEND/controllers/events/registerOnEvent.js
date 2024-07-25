const eventModel = require('../../models/eventModel');
const studentModel = require('../../models/studentModel');
const RegisteredModel = require('../../models/RegisteredModel');

const registerOnEvent = ( async (req,res)=>{
    const email = req.userData.email;

    // check if current user is student or not.
    const isExist = await studentModel.findOne({email});
    try{
        if(!isExist){
            throw new Error("User is unauthorised.");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 1");
        res.status(401).json({message:err.message});
        return;
    }

    // check if event is present or not
    const curEvent = await eventModel.findById(req.params.id);
    try{
        if(!curEvent){
            throw new Error("Event not found");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 2");
        res.status(400).json({message:err.message});
        return;
    }

    // check if event is in past or not.
    const now = new Date();
    const endTime = curEvent.endTime;
    try{
        if(endTime < now){
            throw new Error("Event is Finished.");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 3");
        res.status(400).json({message:err.message});
        return;
    }

    const startTime = curEvent.startTime;
    try{
        if(startTime < now){
            throw new Error("Event is already started.");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 4");
        res.status(400).json({message:err.message});
        return;
    }


    const eventId = req.params.id;
    const userEmail = email;
    try{
        const AlreadyRegistered = await RegisteredModel.findOne({eventId,userEmail});

        if(AlreadyRegistered){
            throw new Error("User already registered.");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 5");
        res.status(400).json({message:err.message});
        return;
    }
    

    const curCapacity = curEvent.curCapacity;
    const newCapacity = curCapacity+1;
    const maxCapacity = curEvent.maxCapacity;
    try{
        if(newCapacity > maxCapacity){
            throw new Error("Event capacity is Full");
        }
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 6");
        res.status(400).json({message:err.message});
        return;
    }

    try{
        const addIntoRegistered = await RegisteredModel.create({eventId,userEmail});
        const updateEvent = await eventModel.findByIdAndUpdate(req.params.id,{curCapacity:newCapacity},{new:true});
        res.status(200).json({message:"Registered successfully"});
    }
    catch(err){
        console.log("This error is coming from student/registerOnEvent.js 7");
        res.status(400).json({message:err.message});
        return;
    }
});

module.exports = registerOnEvent;