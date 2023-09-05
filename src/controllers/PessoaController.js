const database = require('../models');

class PessoaController {
  static async pegaTodas (req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;
