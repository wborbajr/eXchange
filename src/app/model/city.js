/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const City = sequelize.define('city', {
    idcity: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_city: {
      type: Sequelize.STRING(40),
      allowNull: true
    }
  });

  return City
};
