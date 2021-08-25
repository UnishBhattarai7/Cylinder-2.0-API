const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cylinder',{
    useNewUrlParser: true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected', () => {
    consolee.log('Mongoose is connected !!!');
})