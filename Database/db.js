const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sabin:sabin@cluster0.jjzgy.mongodb.net/cylinder?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true
})