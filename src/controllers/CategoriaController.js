const Controller = require("./Controller.js");
const categoriaServices = require("../services/CategoriaService.js");

const CategoriaService = new categoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(CategoriaService);
  }
}


module.exports = CategoriaController;