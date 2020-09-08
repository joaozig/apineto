const countriesController = require('./controllers/countries.controller');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/v1/countries', countriesController);

module.exports = app;
