const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empController');
const AirPollutionController = require('../controllers/iqAirController');
const PlatController = require('../controllers/platController');
const UsersController = require('../controllers/userController');
const RestaurantController = require('../controllers/restaurantController');
const RoleController = require('../controllers/roleControllers');

router.post('/addEmploye', EmpController.addEmploye);

router.get('/getEmployes', EmpController.getEmploye);

router.get('/getEmployeByDate/:dateCreated', EmpController.getEmployeByDate);

router.post('/checkingEmploye', EmpController.doEmpCheck);

router.get('/pollutionParis', AirPollutionController.getHighestPollution);

router.post('/addPlat', PlatController.addPlat);

//////////////////////////////////Role//////////////////////////////////
router.post('/addRole', RoleController.addRole);

router.get('/getRole', RoleController.getRole);

/////////////////////////////////User//////////////////////////////////

router.post('/addUser', UsersController.addUser);

router.get('/getUser', UsersController.getUser);

router.get('/getByRole/:role', UsersController.getByRole);

router.post('/authentification', UsersController.authentification);

router.get('/getPlat', PlatController.getPlat);

router.post('/getByIdUser/:id', UsersController.getByIdUser);

///////////////////////////////Restaurant////////////////////////

router.post('/addRestaurant', UsersController.addRestaurant);

module.exports = router;
