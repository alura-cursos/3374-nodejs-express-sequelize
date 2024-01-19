const Controller = require("./Controller.js");
const MatriculaServices = require("../services/MatriculaService.js");

const MatriculaService = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(MatriculaService);
  }
}


module.exports = MatriculaController;