const mongoose = require('mongoose');

const user =mongoose.Schema({
    login: {type: String , required: true},
    mdp: {type: String, required: true},
    typeUser: {type: String, required: true},
});
module.exports = mongoose.model('User',userSchema);