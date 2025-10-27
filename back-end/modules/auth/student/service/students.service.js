const { StudentModel } = require('../model/students.model');

const registerStudentService = async (studentData) => {
    const res = await StudentModel.create(studentData);
    return res;
}

module.exports = {
    registerStudentService
}
