const mongoose = require('mongoose');

const platSchema = mongoose.Schema({
  plat: { type: String, required: true },
  prixAchat: { type: Number, required: true },
  prixVente: { type: Number, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, required: true },
});
module.exports = mongoose.model('Plat', platSchema);
