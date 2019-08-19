const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

// criar um novo dev
routes.post('/devs', DevController.store);

module.exports = routes;
