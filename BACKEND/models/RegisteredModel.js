const mongoose = require('mongoose');

const RegisteredModel = mongoose.Schema({
    eventId:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Registered', RegisteredModel);
