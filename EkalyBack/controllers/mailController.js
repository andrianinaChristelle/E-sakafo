const mailer = require('../mailer.js');

const buildHtml = () => {
  let html = '';
  html += '<p>Bonjour, </p>';
  html += '<br><br>';
  html +=
    'Votre compte e-kaly est creer veuillez suivre le lien suivant https://m1p9mean-christelle.herokuapp.com, ';
  // html += '<br><br>';
  // let total = 0;
  // panier.forEach((item) => {
  //   total += item.prix;
  //   html += '<p>' + item.nom + ' : ' + item.prix + ' Ar </p>';
  // });
  // html += '<br><br>';
  // html += '<p>Total : ' + total + ' Ar </p>';
  // html += '<br><br>';
  // html += 'Nous vous remercions pour votre commande';
  return html;
};

exports.sendMail = (req, res) => {
  console.log('------ req ', req);
  const { to, subject } = req.body;
  const mailData = {
    from: 'ekaly.pro@gmail.com',
    to: to,
    subject: subject,
    text: 'equipe Ekaly',
    html: buildHtml(),
  };

  mailer.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log('error ---- ', error);
    }
    res.status(200).send({ message: 'Mail send', message_id: info.messageId });
  });
};
