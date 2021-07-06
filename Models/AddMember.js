const mongoose = require('mongoose');

const AddMember = mongoose.model('AddMember',{
    Firstname : {
        type : String,
        required : true
    },
    Lastname : {
        type : String,
        required : true
    },
    Phonenumber : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        enum : ['Admin','Employee']
    },
    Address : {
        type : String,
        required : true
    },
    Profitfromeachcylinder : {
        type : String,
        required : true
    }
})

module.exports = AddMember;