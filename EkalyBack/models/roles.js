const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  role: { type: String, required: true },
});

module.exports = mongoose.model('Role', roleSchema);
