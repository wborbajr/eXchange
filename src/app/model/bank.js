/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Bank = sequelize.define('bank', {
    idbank: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    namebank: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    agency: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    count: {
      type: Sequelize.STRING(15),
      allowNull: true
    }
  });

  return Bank
}