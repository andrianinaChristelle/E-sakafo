const mongoose = require('mongoose');

const checkEmployeSchema = mongoose.Schema({
    id: { type: String, required: true },
    employeId: { type: String, required: true },
    dateCheck: { type: Date, default: Date.now, required: true },
    typeChecking: {
        type: Number,
        enum: [0, 1] // 0 entering, 1 leaving
    },
    diffTime: { type: Number, required: false },
    comment: { type: String, required: false }
});

module.exports = mongoose.model('CheckEmploye', checkEmployeSchema);