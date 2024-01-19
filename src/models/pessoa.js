'use strict';
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      // defina as assosiações aqui
      Pessoa.hasMany(models.Curso, {
        // foreignKey da outra tabela que vai ser usada para busca.
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Pessoa",
    // deixa claro para o sqlite o nome da tabela, evita bugs.
    tableName: "pessoas"
  });
  return Pessoa;
};