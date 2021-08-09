const mongoose = require('mongoose');

const NotificationHistory = mongoose.model('NotificationHistory',{
    Title : {
        type : String,
        required : true
    },
    L1 : {
        type : String,
        required : true
    },
    L2 : {
        type : String,
        required : true
    },
    L3 : {
        type : String,
        required : true
    },
    R1 : {
        type : String,
        required : true
    },
    R2 : {
        type : String,
        required : true
    },
    Action : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = NotificationHistory;