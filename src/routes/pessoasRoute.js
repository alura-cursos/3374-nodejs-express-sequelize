const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");


const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
router.get('/pessoa/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res))

module.exports = router;
