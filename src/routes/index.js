const express = require('express');
const pessoas = require('./pessoasRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
  );
};
