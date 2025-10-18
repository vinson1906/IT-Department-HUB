const mongoose = require('mongoose')


const StaffsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const StaffModel = mongoose.model('Staffs', StaffsSchema)

module.exports = StaffModel