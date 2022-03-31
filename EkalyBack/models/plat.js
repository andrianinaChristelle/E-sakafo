const mongoose = require('mongoose');

const platSchema =mongoose.Schema({
    id: {type: String , required:true},
    nom: {type: String, required: true},
    prix: {type: Number, required: true},
});
module.exports = mongoose.model('Plat',platSchema);