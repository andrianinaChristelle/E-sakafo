const Plat = require('../models/plat');

exports.addPlat = async (req, res, next) => {
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
  await Plat.find()
    .then((plats) => res.status(201).json(plats))
    .catch((error) => res.status(404).json(error));
  next();
};
