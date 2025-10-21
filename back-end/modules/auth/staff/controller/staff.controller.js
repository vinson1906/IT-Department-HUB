const { createAccount, findUser , getUserProfile} = require('../service/staff.service')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerStaff = async (req, res) => {
    try {
        const { name, password, email, phone } = req.body

        const hashedPassword = await bycrypt.hash(password, 10)
        console.log(hashedPassword);

        const payload = {
            name: name,
            password: hashedPassword,
            email: email,
            phone: phone
        }

        const result = await createAccount(payload)
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

const staffLoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUser(email)

        if (!user) {
            return res.status(200).json({
                message: "user not found"
            })
        }

        const validPassword = await bycrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(404).json({
                message: "Invalid Password"
            })
        }

        const token = jwt.sign({ user: user.name }, process.env.JWT_KEY, {
            expiresIn: "2d"
        })

        res.status(200).json({
            token: token
        })

    }
    catch (err) {
        res.status(500).json({
            message: "login faild"
        })
    }
}

const getprofileController = async (req, res) => {
    try {

        const {id} = req.params
        console.log(req.params.id);
        
        const result = await getUserProfile(req.params.id)
        console.log(result);
        
        res.status(200).json({
            message: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            message: "somthing went wrong"
        })
    }
}


module.exports = {
    registerStaff,
    staffLoginController,
    getprofileController
}