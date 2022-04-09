const Commande = require('../models/commande');
const User = require('../models/user');
const UsersController = require('./userController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.addCommande = async (req, res, next) => {
  let tokenDecoded = '';
  await jwt.verify(
    UsersController.verifyToken(req, res),
    'secretkey',
    (err, authData) => {
      if (err) {
        res.status(403).json(err);
      } else {
        res.status(200);
      }
      tokenDecoded = authData;
    }
  );
  delete req.body._id;
  if (tokenDecoded) {
    delete req.body._id;
    const Commande = new Role({
      ...req.body,
    });
    await Commande.save()
      .then(() => res.status(201).json({ message: '---- Commande creer' }))
      .catch((error) => {
        res.status(400).json({ error });
      });
    next();
  }
};
exports.getRole = async (req, res, next) => {
  await Commande.find({ etat: true })
    .then((commande) => res.status(201).json(commande))
    .catch((error) => res.status(404).json(error));
  next();
};
