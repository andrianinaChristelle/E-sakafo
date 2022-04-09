const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empController');
const AirPollutionController = require('../controllers/iqAirController');
const PlatController = require('../controllers/platController');
const UsersController = require('../controllers/userController');
const RestaurantController = require('../controllers/restaurantController');
const RoleController = require('../controllers/roleControllers');
const LivreurController = require('../controllers/livreurController');

router.post('/addEmploye', EmpController.addEmploye);

router.get('/getEmployes', EmpController.getEmploye);

router.get('/getEmployeByDate/:dateCreated', EmpController.getEmployeByDate);

router.post('/checkingEmploye', EmpController.doEmpCheck);

router.get('/pollutionParis', AirPollutionController.getHighestPollution);

/////////////////////Plat///////////////////////////////////

router.post('/addPlat', PlatController.addPlat);
router.get('/getByRestaurant/:idResto', PlatController.getPlat);

//////////////////////////////////Role//////////////////////////////////
router.post('/addRole', RoleController.addRole);

router.get('/getRole', RoleController.getRole);

/////////////////////////////////User//////////////////////////////////

router.post('/addUser', UsersController.addUser);

router.get('/getUser', UsersController.getUser);

router.get('/getToken', UsersController.getToken);

router.get('/getByRole/:role', UsersController.getByRole);

router.post('/authentification', UsersController.authentification);

router.get('/getPlat', PlatController.getPlat);

router.get('/getByIdUser/:id', UsersController.getByIdUser);

///////////////////////////////Restaurant////////////////////////

router.post('/addRestaurant', UsersController.addRestaurant);

router.post('/addLivreur', LivreurController.addLivreur);

router.get('/searchLivreur/:key', LivreurController.searchLivreur);

// router.get('/', RoleController.hello);

module.exports = router;
