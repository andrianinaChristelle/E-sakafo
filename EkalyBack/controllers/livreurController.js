const mongoose = require('mongoose');
const User = require('../models/user');
const UsersController = require('./userController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.addLivreur = async (req, res, next) => {
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
    const Users = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      prenom: req.body.prenom,
      contact: req.body.contact,
      nom: req.body.nom,
      role: req.body.role,
    });
    await Users.save()
      .then(() => res.status(201).json({ message: '---- User creer' }))
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
  next();
};

exports.searchLivreur = async (req, res, next) => {
  console.log(req.params.key);
  await User.find({
    $and: [
      { nom: { $regex: '.*' + req.params.key + '.*' } },
      { role: '624d4aa38dc84c21fb3afd78' },
    ],
  })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};
