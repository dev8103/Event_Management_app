const mongoose = require('mongoose');

const ClubCommitteeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the club/committee name."],
    },
    description: {
        type: String,
        required: [true, "Please add the club/committee description."],
    },
    email: {
        type: String,
        required: [true, "Please add the club/committee's email."],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ClubCommittee', ClubCommitteeSchema);
