const Restaurant = require('../models/restaurant');
const userController = require('./userController');

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
exports.getRestaurant = async (res, req, next) => {
  await Restaurant.find()
    .then((response) => res.status(201).json(response))
    .catch((error) => res.status(404).json(error));
  next();
};
