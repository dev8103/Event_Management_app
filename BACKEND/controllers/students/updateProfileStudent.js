const Student = require('../../models/studentModel');


const updateProfileStudent =  (async (req,res)=>{

    const curStudent = await Student.findById(req.params.id);
    try{
        if(!curStudent){
            throw new Error("Student not Found.");    
        }

        const updatedStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedStudent);
    }
    catch(error){
        console.log("this error is coming from controllers/student/updateProfileStudent.js");
        console.log(error);
        res.status(404).json({message :error.message});
    }
})

module.exports = updateProfileStudent;