const { registerStaff, staffLoginController, getprofileController } = require('./controller/staff.controller');
const StaffRoutes = require('express').Router();
const verifyToken = require('../auth.middleware')

StaffRoutes.post('/staff/register', registerStaff);
StaffRoutes.post('/staff/login', staffLoginController);
StaffRoutes.get('/staff/get-profile/:id',verifyToken, getprofileController);

module.exports = StaffRoutes;
