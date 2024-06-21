const Student = require('../../models/studentModel');

const profileStudent = async (req,res)=>{
    const studentEmail = req.userData.email;
    // console.log(studentEmail);
    const curStudent = await Student.findOne({email:studentEmail});
    console.log(curStudent);
    try{
        if(!curStudent){
            res.status(400);
            throw new Error("Student not found.");
        }
        res.status(200).json(curStudent);
    }
    catch(error){
        console.log("this error is coming from controllers/students/profileStudent");
        console.log(error);
        return res.status(401).json({message :error.message});
    }

};

module.exports = profileStudent;