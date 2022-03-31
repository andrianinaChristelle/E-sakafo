const Restaurant = require('../models/restaurant');

exports.addRestaurant = async(req, res, next) => {
    delete req.body._id;
    const Restaurants = new Restaurant({
        ...req.body
    });
    await Restaurants.save()
        .then(() => res.status(201).json({ message: "---- restaurant creer"}))
        .catch((error) => { res.status(400).json({ error }) });
    next();
}