const express = require('express');
const cors = require('cors');
const logger = require('./server/logger.js');
const countryRouter = require('./server/routers/countries.js');

const app = express();

app.use(cors());
app.use(logger);

app.use('/countries', countryRouter);

module.exports = app;