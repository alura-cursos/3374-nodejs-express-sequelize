const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

module.exports = app;
