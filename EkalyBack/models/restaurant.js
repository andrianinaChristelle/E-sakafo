const mongoose = require('mongoose');

const restaurantSchema =mongoose.Schema({
    Id_user: {type: String , required: true},
    Nom: {type: String, required: true},
    Localisation: {type: String, required: true},
});
module.exports = mongoose.model('Restaurant',restaurantSchema);