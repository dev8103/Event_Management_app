const bcrypt = require("bcrypt");
const Student = require('../../models/studentModel');


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
