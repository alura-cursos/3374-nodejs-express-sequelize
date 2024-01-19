// dentro da models tem um index com todos os modelos.
const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosRegistro() {
    return dataSource[this.model].findAll();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services