const mongoose = require('mongoose');

const employeSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now, required: true },
    department: { type: String, required: true }
});

module.exports = mongoose.model('Employe', employeSchema);