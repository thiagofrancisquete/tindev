const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();

// rota de listagem dos devs
routes.get('/devs', DevController.index);

// criar um novo dev
routes.post('/devs', DevController.store);

// rota de likes e dislikes
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
