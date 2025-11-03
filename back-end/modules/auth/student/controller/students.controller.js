const { registerStudentService } = require('../service/students.service');
const bcrypt = require('bcrypt')

const registedStudentController = async (req, res) => {
    try {

        const { password, name, email, phone, year, collegeId } = req?.body

        const hashedpassword = bcrypt.hash(password, 10)

        const payload = {
            name: name,
            password: hashedpassword,
            email: email,
            year: year,
            phone: phone,
            collegeId: collegeId
        }

        const students = await registerStudentService(payload);

        return res.status(200).json({
            message: "student registered successfully",
        });
    }
    catch (err) {
        console.log("Error:", err);
    }
}


module.exports = {
    registedStudentController
}
