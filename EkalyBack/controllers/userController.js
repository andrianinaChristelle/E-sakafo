const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = require('../routes/routes');
const Token = require('../models/token');

exports.addUser = async (req, res, next) => {
  delete req.body._id;
  const Users = new User({
    ...req.body,
  });
  await Users.save()
    .then(() => res.status(201).json({ message: '---- User creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

verifyToken = (req, res) => {
  let bearerHeader = req.headers['authorization'];
  // console.log(req.headers['authorization']);
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    bearerToken = bearer[1];
  }
  return bearerToken;
};

exports.getUser = async (req, res, next) => {
  let tokenDecoded = '';
  await jwt.verify(verifyToken(req, res), 'secretkey', (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      res.status(200).json(authData);
      console.log(authData.user._id);
    }
    // tokenDecoded = authData;
  });
  console.log('------ decoded ', tokenDecoded);
  // if (tokenDecoded) {
  //   await User.find().then((response) => res.status(200).json(response));
  // }
  next();
};

exports.authentification = async (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const users = await User.findOne(user);
  console.log(users);
  if (users == null) {
    res.status(401).json('---- User incorrect');
  } else {
    const token = jwt.sign({ user: users }, 'secretkey', {
      expiresIn: '3600s',
    });
    // const token = new Token({
    //   token: sign,
    // });
    // await token.save();
    res.status(200).json({ token });
  }
  next();
};
