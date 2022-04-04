const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empController');
const AirPollutionController = require('../controllers/iqAirController');
const PlatController = require('../controllers/platController');
const UsersController = require('../controllers/userController');

router.post('/addEmploye', EmpController.addEmploye);

router.get('/getEmployes', EmpController.getEmploye);

router.get('/getEmployeByDate/:dateCreated', EmpController.getEmployeByDate);

router.post('/checkingEmploye', EmpController.doEmpCheck);

router.get('/pollutionParis', AirPollutionController.getHighestPollution);

router.post('/addPlat', PlatController.addPlat);

router.post('/addUser', UsersController.addUser);

router.get('/getUser', UsersController.getUser);

router.post('/authentification', UsersController.authentification);

router.get('/getPlat', PlatController.getPlat);

module.exports = router;
