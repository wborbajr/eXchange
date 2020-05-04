/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Chartaccount = sequelize.define('chartaccount', {
    idchartaccount: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    namechartaccount: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    io: {
      type: Sequelize.STRING(1),
      allowNull: true
    }
  });

  return Chartaccount
};
