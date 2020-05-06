const dotevn = require('dotenv');
dotevn.config();

const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ hellow: 'world' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));


// https://intense-spire-73746.herokuapp.com


