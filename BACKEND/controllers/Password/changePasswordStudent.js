const bcrypt = require('bcrypt');
const studentModel = require("../../models/studentModel");

const changePasswordStudent = (async (req,res)=>{
    const email = req.userData.email;
    const curStudent = await studentModel.findOne({email});

    // authentication of student.
    try{
        if(!curStudent){
            res.status(401);
            throw new Error("User is unauthorised.");
        }
    }
    catch(error){
        console.log("This error is coming from changePassword.js auth part");
        res.status(401).json({message:error.message});
        return;
    }

    const oldPassword = req.body.oldPass;
    const newPassword = req.body.newPass;
    const hashedPassword = curStudent.password;
    // check for old password.
    try{
        const match = await bcrypt.compare(oldPassword,hashedPassword);
        if(!match){
            throw new Error("Entered Password is incorrect.");
        }
    }
    catch(error){
        console.log("This error is coming from students/changepassword.js check part");
        res.status(401).json({message:error.message});
        return;
    }
    
    // update to new password
    try{
        const newHashedPassword = await bcrypt.hash(newPassword,10);
        const filter = {email};
        const update = {password:newHashedPassword};
        const updatedStudent = await studentModel.findOneAndUpdate(filter,update,{new:true});
        res.status(200).json({message:"Password changes successfully."});
        return;
    }
    catch(error){
        console.log("This error is coming from students/changepassword.js change part");
        res.status(400).json({message:error.message});
    }

});

module.exports = changePasswordStudent;