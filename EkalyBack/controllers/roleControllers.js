const Role = require('../models/roles');

exports.addRole = async (req, res, next) => {
  delete req.body._id;
  const Roles = new Role({
    ...req.body,
  });
  await Roles.save()
    .then(() => res.status(201).json({ message: '---- Role creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.getRole = async (req, res, next) => {
  await Role.find()
    .then((Roles) => res.status(201).json(Roles))
    .catch((error) => res.status(404).json(error));
  next();
};
exports.hello = async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
};

// exports.getRole = async (req, res, next) => {
//   await Role.find()
//     .then((Roles) => res.status(201).json(Roles))
//     .catch((error) => res.status(404).json(error));
//   next();
// };
