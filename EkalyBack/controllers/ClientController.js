const client = require('../models/client');
const userController = require('./userController');
const user = require('../models/user');

exports.getUser = async (req, res, next) => {
  let tokenDecoded = '';
  await jwt.verify(
    userController.verifyToken(req, res),
    'secretkey',
    (err, authData) => {
      if (err) {
        res.status(403).json(err);
      } else {
        res.status(200).json(authData);
        console.log(authData.user._id);
      }
    }
  );
  console.log('------ decoded ', tokenDecoded);
  if (tokenDecoded) {
    await client
      .findOne({ id_user: authData._id })
      .then((response) => res.status(200).json(response));
  }
  next();
};
