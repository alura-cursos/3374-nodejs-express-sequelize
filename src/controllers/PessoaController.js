const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaService.js");

const pessoaService = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculas(req, res) {
    const {estudanteId} = req.params;

    try {
      const listaMatriculas = await pessoaService.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
      
    } catch (error) {
      // error 
    }
  }

}


module.exports = PessoaController;