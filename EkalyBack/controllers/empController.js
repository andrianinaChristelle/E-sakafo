const moment = require('moment');
const Employe = require('../models/employe');
const CheckEmp = require('../models/checkEmploye');

exports.addEmploye = async (req, res, next) => {
  delete req.body._id;
  const employes = new Employe({
    ...req.body,
  });
  await employes
    .save()
    .then(() => res.status(201).json({ message: '---- created' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.getEmploye = async (req, res, next) => {
  await Employe.find()
    .then((employes) => res.status(201).json(employes))
    .catch((error) => res.status(404).json(error));
  next();
};

exports.getEmployeByDate = async (req, res, next) => {
  let currentDay = moment(req.params.dateCreated).format('L');
  const nextDay = moment(new Date(currentDay)).add(1, 'days');

  await Employe.find({
    dateCreated: { $gte: new Date(currentDay), $lt: new Date(nextDay) },
  })
    .then((employe) => res.status(200).json(employe))
    .catch((error) => res.status(404).json({ error }));

  next();
};

exports.doEmpCheck = async (req, res, next) => {
  let typeChecking = req.body.typeChecking; // 0 enter, 1 leave
  let employeId = req.body.employeId;
  if (typeChecking == 0) {
    delete req.body._id;
    const checkingEmployes = new CheckEmp({
      ...req.body,
    });
    await checkingEmployes
      .save()
      .then((checkingEmployes) => res.status(201).json(checkingEmployes))
      .catch((error) => res.status(400).json({ error }));
  } else {
    // calculate diff time between chekin and checkout for the emp for the day
    // 1- get checking of the emp of the day
    let currentDay = moment(new Date()).format('L');
    console.log(currentDay);
    let nextDay = moment(new Date(currentDay)).add(1, 'days');
    let timeEnter;
    await CheckEmp.findOne({
      employeId: employeId,
      dateCheck: { $gte: new Date(currentDay), $lt: new Date(nextDay) },
    })
      .then((checkEmploye) => {
        res.status(200).json(checkEmploye);
        timeEnter = moment(checkEmploye.dateCheck).format('LT');
      })
      .catch((error) => res.status(404).json({ error }));

    // calcul the diffTime
    let timeLeave = moment(new Date()).format('LT');
    let timeEnterFormatted = moment(timeEnter, 'HH:mm:ss a');
    let timeLeaveFormatted = moment(timeLeave, 'HH:mm:ss a');
    let calcDiffTime = moment.duration(
      timeLeaveFormatted.diff(timeEnterFormatted)
    );
    let diffTime =
      calcDiffTime.hours() * 60 +
      calcDiffTime.minutes() +
      calcDiffTime.seconds() / 60; // diffTime in minutes
    console.log(diffTime);

    // 2- save the checkout with timeDiff
    const checkEmploye = new CheckEmp({
      id: req.body.id,
      employeId: employeId,
      dateCheck: currentDay,
      typeChecking: typeChecking,
      diffTime: diffTime,
      comment: req.body.comment,
    });
    await checkEmploye
      .save()
      .then(() => res.status(201).json({ message: 'created' }))
      .catch((error) => res.status(400).json({ error }));
  }
};
