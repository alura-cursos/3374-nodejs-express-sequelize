const routes = require('./PeopleRoutes.js');
const express = require('express');

module.exports = app =>
{
  app.use(express.json(),routes);
};

