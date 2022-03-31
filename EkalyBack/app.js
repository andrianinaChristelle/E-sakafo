const express = require('express');
const mongoose = require('mongoose');


const apiRoutes = require('./routes/routes');

mongoose.connect('mongodb://celenao:6KzXSEqmYbeoxrOB@cluster0-shard-00-00.cbxkz.mongodb.net:27017,'+
                    'cluster0-shard-00-01.cbxkz.mongodb.net:27017,cluster0-shard-00-02.cbxkz.mongodb.net:27017/'+
                    'myFirstDatabase?ssl=true&replicaSet=atlas-tcaju3-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected'))
    .catch(error => console.log(error));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api', apiRoutes);

const IQAirController = require('./controllers/iqAirController');

IQAirController.getIqAir().then((res) => {
    let stringRet = '{ "results": { "pollution": ';
    stringRet += JSON.stringify(res);
    stringRet += ' } }';
    const jsonRet = JSON.parse(stringRet);
    //console.log(jsonRet);
    return jsonRet;
});

const AirPollution = require('./models/airPollution');

const getSaveIqAirParis = async () => {
    let datasRet = new Object();
    await IQAirController.getIqAirParis().then(datas => {
        datasRet = datas;
    })
    const airPollution = new AirPollution({
        ts: datasRet.current.pollution.ts,
        aqius: datasRet.current.pollution.aqius,
        mainus: datasRet.current.pollution.mainus,
        aqicn: datasRet.current.pollution.aqicn,
        maincn: datasRet.current.pollution.maincn
    });
    await airPollution.save()
    .then(() => {
        console.log('saved!')
    })
    .catch(error => console.log(error));
}

const cron = require('node-cron');
// 0*/1**** pattern for cron task to run every hour
cron.schedule('0 */1 * * *', () => {
    console.log('cron task');
    getSaveIqAirParis();
})



module.exports = app;