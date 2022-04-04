const mongoose = require('mongoose');

const tokenShchema = mongoose.Schema({
  token: { type: String, required: true },
});
module.exports = mongoose.model('Token', tokenShchema);
