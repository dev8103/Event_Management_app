const mongoose = require('mongoose');

const ClubCommitteeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the club/committee name."],
    },
    isclub :{
        type: Boolean,
    },
    description: {
        type: String,
        required: [true, "Please add the club/committee description."],
    },
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

module.exports = mongoose.model('ClubCommittee', ClubCommitteeSchema);
