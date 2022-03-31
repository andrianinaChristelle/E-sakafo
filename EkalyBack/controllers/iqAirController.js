const fetch = require('node-fetch');
const constante = require('../util/constante');

const AirPollution = require('../models/airPollution');

const getHighestPollution = async(req, res, next) => {
    // await AirPollution.find({}).sort({ aqius: -1 }).limit(1)
    await AirPollution.find().sort({ aqius: -1 }).limit(1)
        .then(airPollution => res.status(201).json(airPollution[0].date))
        .catch(error => res.status(404).json(error));
    next();
}

const url = 'http://api.airvisual.com/v2/nearest_city?key='+constante.API_KEY;
const getIqAir = () => {
    return fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res.data.current.pollution;
    })
    .catch(error => console.log(error));
}

// // qualite de l'air de paris { lat: 48.856613 long: 2.352222 }
const urlIqAirParis = 'http://api.airvisual.com/v2/nearest_city?lat='+constante.LAT_PARIS+'&lon='+constante.LONG_PARIS+'&key='+constante.API_KEY;
const getIqAirParis = () => {
    return fetch(urlIqAirParis)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res.data;
    })
    .catch(error => console.log(error));
}

module.exports =  {
    getIqAir,
    getIqAirParis,
    getHighestPollution
}