const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name."],
    },
    username:{
        type: String,
        required: [true, "Please add the username."],
        unique: [true, "username is already taken."],
    },
    email: {
        type: String,
        required: [true, "Please add the student's email."],
        unique: [true,"email address already registered."],
        match: [
            /^\w+([.-]?\w+)*@daiict\.ac\.in$/,
            "Please add institute email address."
        ],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please add the student's phone number."],
        unique: [true,"phone number already registered."],
        validate(m) {
            if (validator.isMobilePhone(m)) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    password:{
        type: String,
        required: [true,"Please add the password."]
    },
    isverified:{
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('student', StudentSchema);
