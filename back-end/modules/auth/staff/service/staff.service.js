const StaffModel = require('../model/staff.model')

const createAccount = async (data) => {
    const res = await StaffModel.create(data)
    return res
}

const findUser = async (email) => {
    const res = await StaffModel.findOne({ email: email })
    return res
}

const getUserProfile = async (id) => {
    console.log(id);
    
    const res = await StaffModel.findById(id)

    const response = {
        name:res.name,
        email:res.email,
        phone:res.phone,
        _id:res._id,
        created:res.createdAt,
        updated:res.updatedAt
    }
    return response
}

module.exports = {
    createAccount,
    findUser,
    getUserProfile
}