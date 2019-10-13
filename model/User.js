const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    email:{
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date:{
        type: Date,
        defaul: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);