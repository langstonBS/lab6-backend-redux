const dotevn = require('dotenv');
dotevn.config();

const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(cors());

app.get('/location', (req, res) => {
    res.json({ hellow: 'location' });
});

app.get('/weather', (req, res) => {
    res.json({ hellow: 'wether' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));


// https://intense-spire-73746.herokuapp.com


