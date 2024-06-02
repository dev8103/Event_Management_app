const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');

const Student = require('../../models/studentModel');
const otp = require('../../models/otpModel');

const x = require('../../mailer/mailer');
const mailforsignup = x.signup;

const signupStudent = async (req, res) => {
    const {
        name,
        username,
        email,
        phoneNumber,
        password,
    } = req.body;

    try {
        // Check for missing fields
        if (!name || !username || !email || !phoneNumber || !password) {
            return res.status(400).json({ message: "All fields are mandatory." });
        }

        // Check if the student already exists
        const studentAvailable = await Student.findOne({ email });
        if (studentAvailable) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(`hashed password: ${hashedPassword}`);

        // email verification
        const match = await otp.findOne({email});
        if(match){
            try{
                await otp.deleteOne({email});
                console.log("Document deleted successfully.");
            }
            catch(error){
                console.log("This error is coming from verifyEmail.js/match part");
                console.log("Error deleting document ",error);
                return res.status(500).json({message:"Internal server error"});
            }
        }

        try{
            const newotp_number = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
            console.log(newotp_number);
    
            const hashed_otp = await bcrypt.hash(newotp_number,8);
            console.log('hashed otp :',hashed_otp);
        
            const mailer = mailforsignup(email,newotp_number);
            const newotp = await otp.create({
                email,
                otp_number:hashed_otp,
            })
        }
        catch(error){
            console.log('This error is coming from signupStudent.js/mailer part.');
            console.log(error);
            return res.status(400).send();
        }

        // Create the student
        const createdStudent = await Student.create({
            name,
            username,
            email,
            phoneNumber,
            password: hashedPassword,
        });

        console.log('Student created successfully');
        console.log(createdStudent);


        // Send response after student is created and email verification initiated
        return res.status(201).json({ name: createdStudent.name, email: createdStudent.email });

    } catch (error) {
        console.log("This error is coming from controllers/students/signupStudent.js");
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = signupStudent;
