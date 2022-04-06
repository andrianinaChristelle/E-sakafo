const mongoose = require('mongoose');
const platSchema = mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, required: true },
  nom: { type: String, required: true },
  prenom: { type: Number, required: true },
});
module.exports = mongoose.model('Plat', platSchema);
