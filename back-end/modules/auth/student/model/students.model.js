const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    collegeId: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

const StudentModel = mongoose.model('Student', studentSchema);

module.exports = {
    StudentModel
}