const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please add the event name."],
    },
    description: {
        type: String,
        required: [true,"Please add the event description."],
    },
    eventOrganiser: {
        type: String,
        required: [true,"Please add the event Organiser name."],
    },
    clubCommitteeEmail: {
        type: String,
        required: [true, "Please add the organizing club/committee email address."]
    },
    startTime: {
        type: Date,
        required: [true,"Please add the starting time."],
    },
    endTime: {
        type: Date,
        required: [true,"Please add the ending time."],
    },
    isOnline: {
        type: Boolean,
        required: [true,"Please add whether event is online or not."],
    },
    meetingLink: {
        type: String,
    },
    venue: {
        type: String,
    },
    mainGuest: {
        type: [String],
        default: []
    },
    sponsors: {
        type: [String],
        default: []
    },
    curCapacity: {
        type: Number,
        default : 0
    },
    maxCapacity: {
        type: Number,
        required: [true,"Please add maximum capacity."],
    },
    coordinators: [{
        name: {
            type: String,
            required: [true,"Please add name of event coordinator."],
        },
        mobileNumber: {
            type: String,
            required: [true,"Please add mobile number of event coordinator."],
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', EventSchema);
