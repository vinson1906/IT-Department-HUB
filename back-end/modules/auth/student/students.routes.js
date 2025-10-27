const {registedStudentController} = require('./controller/students.controller')
const StudentRoute = require('express').Router()

StudentRoute.post('/student/sign-up',registedStudentController);

module.exports = StudentRoute