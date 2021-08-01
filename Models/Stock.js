const mongoose = require('mongoose');

const Stock = mongoose.model('Stock',{
    Regular_Prima : {
        type : Number,
        default : 0
    },
    Regular_Kamakhya : {
        type : Number,
        default : 0
    },
    Regular_Suvidha : {
        type : Number,
        default : 0
    },
    Regular_Others : {
        type : Number,
        default : 0
    },
    Leak_Prima : {
        type : Number,
        default : 0
    },
    Leak_Kamakhya : {
        type : Number,
        default : 0
    },
    Leak_Suvidha : {
        type : Number,
        default : 0
    },
    Leak_Others : {
        type : Number,
        default : 0
    },
    Sold_Prima : {
        type : Number,
        default : 0
    },
    Sold_Kamakhya : {
        type : Number,
        default : 0
    },
    Sold_Suvidha : {
        type : Number,
        default : 0
    },
    Sold_Others : {
        type : Number,
        default : 0
    },
    SendOrReceive : {
        type : String,
        enum : ["Send", "Receive"],
        required : true
    },
    StockUpdatedAt : {
        type : Date,
        default : Date.now,
    },
    Entryby : {
        type : String,
        required : true,
        default : "Admin"
    }
})

module.exports = Stock;