const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoute.js');
const cursos = require('./cursosRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};
