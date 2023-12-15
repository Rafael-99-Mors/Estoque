'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marajao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marajao.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.ENUM('B','C','E','P','F'),
    vendas: DataTypes.STRING,
    quantidade_estoque: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'marajao',
  });
  return marajao;
};