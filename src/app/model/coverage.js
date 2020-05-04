/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Coverage = sequelize.define('coverage', {
    idcoverage: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    namecoverage: {
      type: Sequelize.STRING(20),
      allowNull: true
    }
  });

  return Coverage;
};
