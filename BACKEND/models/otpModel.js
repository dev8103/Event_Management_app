const mongoose = require("mongoose");

const otpModel = new mongoose.Schema({
    otp_number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires : 600,
    }
})

module.exports = mongoose.model('otp', otpModel);
