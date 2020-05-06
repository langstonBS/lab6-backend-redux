const dotevn = require('dotenv');
dotevn.config();

const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.git('/', (req, res) => {
    res.json({ hellow: 'world' });
});

app.listen(PORT, () => console.log(PORT));


