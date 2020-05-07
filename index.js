const dotevn = require('dotenv');
dotevn.config();
const locationData = require('./data/geo.json');
const weatherData = require('./data/weather.json');
const express = require('express');

const { bringWetherData,
    bringLocationData } = require('./utils.js');

const cors = require('cors');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(cors());



app.get('/weather', (req, res) => {
    const jsonData = bringWetherData(weatherData);
    res.json(jsonData);
    

});

app.get('/location', (req, res) => {
    const jsonData = bringLocationData(locationData);
    res.json(jsonData);
    
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));


// https://intense-spire-73746.herokuapp.com


