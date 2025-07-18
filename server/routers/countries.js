const { Router } = require('express');
const countryController = require('../controllers/countries.js');

const countryRouter = Router();

countryRouter.get('/', countryController.index);

module.exports = countryRouter;