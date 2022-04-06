const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  localisation: { type: String, required: false },
  nom: { type: String, required: true },
  prenom: { type: String, required: false },
  contact: { type: String, required: false },
  role: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('User', userSchema);
