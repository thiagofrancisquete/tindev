const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Ola mundo'
  });
});

routes.post('/devs', (req, res) => {
  return res.json({
    ok: true
  });
});

module.exports = routes;
