const { registerStaff } = require('./controller/staff.controller')
const StaffRoutes = require('express').Router()

StaffRoutes.post('/staff/register', registerStaff);

module.exports = StaffRoutes;
