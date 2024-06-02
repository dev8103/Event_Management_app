const mongoose = require('mongoose');

const sbgSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please add the clube/committee email."],
        unique: [true,"email address already registered."],
        match: [
            /^\w+([.-]?\w+)*@daiict\.ac\.in$/,
            "Please add institute email address."
        ],
    },
    password:{
        type: String,
        required: [true,"Please add the password."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('sbg', sbgSchema);
