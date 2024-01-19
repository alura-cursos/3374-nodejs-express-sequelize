const { Router } = require('express');
const CursosController = require('../controllers/CursoController.js');

const cursosController = new CursosController();

const router = Router();

router.get('/cursos', (req, res) => cursosController.obtemTodos(req, res));
router.get('/cursos/:id', (req, res) => cursosController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursosController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursosController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursosController.exclui(req, res));

module.exports = router;