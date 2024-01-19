const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

app.use(express.json());

module.exports = app;
