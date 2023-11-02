const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 3,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("Phone number is not valid");
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }
        }
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    }
});


const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;