const StaffModel = require('../model/staff.model')

const createAccount = async (data) => {
    const res = await StaffModel.create(data)
    return res
}

module.exports = {
    createAccount
}