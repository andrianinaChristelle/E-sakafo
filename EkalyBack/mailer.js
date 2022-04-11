var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'ekaly.pro@gmail.com',
    pass: 'ExCalibuR123!',
  },
  secure: true,
});

module.exports = transporter;
