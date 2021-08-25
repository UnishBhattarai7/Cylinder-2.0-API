const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sabin:sabin@cluster0.jjzgy.mongodb.net/cylinder',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true
})