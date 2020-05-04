/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const  Login =  sequelize.define('login', {
    idlogin: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    nome: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    perfil: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    active: {
      type: Sequelize.CHAR(1),
      allowNull: true
    }
  });

  return Login;
};
