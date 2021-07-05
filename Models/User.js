const mongoose = require('mongoose');

const User = mongoose.model('User',{
    Fullname : {
        type : String,
        required : true
    },
    Phonenumber : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true
    },
    Usertype : {
        type : String,
        enum : ['Admin','Employee']
    }
})

module.exports = User;