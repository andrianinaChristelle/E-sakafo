const mongoose = require('mongoose');
const commandeShema = mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, required: true },
  etat: { type: boolean, required: true },
  date: { type: Date, required: true },
});
module.exports = mongoose.model('Commande', commandeShema);
