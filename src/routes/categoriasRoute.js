const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categoria', (req, res) => categoriaController.obtemTodos(req, res));
router.get('/categoria/:id', (req, res) => categoriaController.pegaUmPorId(req, res));
router.post('/categoria', (req, res) => categoriaController.criaNovo(req, res));
router.put('/categoria/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categoria/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router;