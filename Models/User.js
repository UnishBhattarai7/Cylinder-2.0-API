const mongoose = require('mongoose');

const User = mongoose.model('User',{
    first_name : {
        type : String,
        required : [true,'Enter first name'],
        trime:true
    },
    last_name : {
        type : String,
        required : [true,'Enter last name'],
        trim : true,
    },
    phone_number : {
        type : String,
        required : [true, 'Enter Phone number'],
        unique : true
    },
    username:{
        type: String,
        required : true,
    },
    address : {
        type : String,
        required : [true, 'Address Required']
    },
    status : {
        type : String,
        enum : ['Admin','Employee'],
        default:'Employee'
    },
    isActive:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password : {
        type : String,
        required : true,
    },
    comission_percent: {
        type : String,
        required : true
    },
    change_password : {
        type : Boolean,
        default:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})

module.exports = User;