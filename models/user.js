const mongoose= require('mongoose');

//Schema
const userSchema= new mongoose.Schema({
    firstName: {
        type: String, required:true
    },
    lastName: {
        type: String, required:false
    },
    email: {
        type: String, required:true, unique:true
    },
    gender: {
        type: String, required:false,
    },
    jobTitle: {
        type: String, required:false,
    },
}, {timestamps: true});

const User= mongoose.model('user', userSchema);//now using this User we can perform all operations

module.exports= User;