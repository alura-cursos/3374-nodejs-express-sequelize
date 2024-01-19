const express = require("express");
const pessoas = require("./pessoasRoute.js");
const categoria = require("./categoriasRoute.js")
const cursos = require("./cursosRoute.js")

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categoria,
    cursos
  )
}