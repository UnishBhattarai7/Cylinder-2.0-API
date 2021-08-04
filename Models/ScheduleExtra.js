const mongoose = require('mongoose');

const ScheduleExtra = mongoose.model('ScheduleExtra',{
    scheduledDate:{
        type: Date,
        required : true
    },
    scheduledTime:{
        type: String,
        required:true
    },
    subject : {
        type : String,
        required : true,
        trim : true
    },
    message : {
        type : String,
        required : true,
        trim : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    scheduledBy : {
        type : String,
    },
    isAccepted:{
        type:Boolean,
        default:false
    },
    acceptedBy:{
        type:String
    }
})

module.exports = ScheduleExtra;