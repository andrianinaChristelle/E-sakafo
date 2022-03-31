const mongoose = require('mongoose');

const airPollutionSchema = mongoose.Schema({
    ts: { type: Date, required: true },
    aqius: { type: Number, required: true },
    mainus: { type: String, required: true },
    aqicn: { type: Number, required: true },
    maincn: { type: String, required: true } ,
    date: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('AirPollution', airPollutionSchema);