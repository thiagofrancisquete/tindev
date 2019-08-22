const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

// => conectando ao cluster
mongoose.connect(
  'mongodb+srv://thiago:leandra@cluster0-4iza8.mongodb.net/omnistack8?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
