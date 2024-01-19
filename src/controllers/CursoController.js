const Controller = require("./Controller.js");
const CursoServices = require("../services/CursoService.js");

const CursoService = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(CursoService);
  }
}


module.exports = CursoController;