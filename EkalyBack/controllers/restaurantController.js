const Restaurant = require('../models/restaurant');
const userController = require('./userController');
const User = require('../models/user');
const mongoose = require('mongoose');

exports.addRestaurant = async (req, res, next) => {
  delete req.body._id;
  const Restaurants = new Restaurant({
    ...req.body,
  });
  await Restaurants.save()
    .then(() => res.status(201).json({ message: '---- restaurant creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.recherche = async (req, res, next) => {
  // const id = '624d4ad88dc84c21fb3afd7c';
  // console.log(id);
  // const role = mongoose.Types.ObjectId(id);
  await User.find({
    $and: [
      { nom: { $regex: '.*' + req.params.key + '.*' } },
      { role: '624d4ad88dc84c21fb3afd7c' },
    ],
  })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};

exports.getRestaurant = async (req, res, next) => {
  const id = '624d4ad88dc84c21fb3afd7c';
  console.log(id);
  const role = mongoose.Types.ObjectId(id);
  await User.find({ role: role })
    .then((users) => res.status(200).json({ data: users }))
    .catch((error) => res.status(404).json(error));
  next();
};
