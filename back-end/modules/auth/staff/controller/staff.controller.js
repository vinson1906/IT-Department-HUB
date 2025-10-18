const { createAccount } = require('../service/staff.service')


const registerStaff = async (req, res) => {
    try {
        const result = await createAccount(req.body)
        res.status(201).json({
            message: "staff account created successfully",
            data: result
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "unable to create staff account"
        })
    }
}


module.exports = {
    registerStaff
}