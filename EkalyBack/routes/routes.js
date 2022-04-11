const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empController');
const AirPollutionController = require('../controllers/iqAirController');
const PlatController = require('../controllers/platController');
const UsersController = require('../controllers/userController');
const RestaurantController = require('../controllers/restaurantController');
const RoleController = require('../controllers/roleControllers');
const LivreurController = require('../controllers/livreurController');
const MailController = require('../controllers/mailController');
const CommandeController = require('../controllers/commandeController');

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

/////////////////////////////////Plat////////////////////////////////

router.get('/getPlat', PlatController.getPlat);

router.get('/searchPlat/:key/:idResto', PlatController.recherchePlat);

router.get('/getByIdUser/:id', UsersController.getByIdUser);

///////////////////////////////Restaurant////////////////////////

router.post('/addRestaurant', UsersController.addRestaurant);

router.post('/addLivreur', LivreurController.addLivreur);

router.get('/searchLivreur/:key', LivreurController.searchLivreur);

router.get('/getResto', RestaurantController.getRestaurant);

router.get('/searchResto/:key', RestaurantController.recherche);

//////////////////////////Client//////////////////////////////////
router.post('/addClient', UsersController.addClient);

//////////////////////////Commande ///////////////////////////
router.post('/addCommande', CommandeController.addCommande);

// router.get('/', RoleController.hello);

router.post('/send-mail', MailController.sendMail);

module.exports = router;
