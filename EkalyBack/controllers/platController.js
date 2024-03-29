const Plat = require('../models/plat');
const mongoose = require('mongoose');
const UsersController = require('./userController');
const jwt = require('jsonwebtoken');

exports.addPlat = async (req, res, next) => {
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
  const plats = new Plat({
    ...req.body,
  });
  await plats
    .save()
    .then(() => res.status(201).json({ message: '---- plat creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.getPlat = async (req, res, next) => {
  const id = req.params.idResto;
  console.log(id);
  const objectId = mongoose.Types.ObjectId(id);
  await Plat.find({ restaurant: objectId })
    .then((plats) => res.status(201).json({ data: plats }))
    .catch((error) => res.status(404).json(error));
  next();
};
exports.recherchePlat = async (req, res, next) => {
  // const id = '624d4ad88dc84c21fb3afd7c';
  // console.log(id);
  // const role = mongoose.Types.ObjectId(id);
  await Plat.find({
    $and: [
      { plat: { $regex: '.*' + req.params.key + '.*' } },
      { restaurant: req.params.idResto },
    ],
  })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};
