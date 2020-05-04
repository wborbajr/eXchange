/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Classcustomer = sequelize.define('classcustomer', {
    idclasscustomer: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    seeincompany: {
      type: Sequelize.INTEGER(1),
      allowNull: true
    }
  });

  return Classcustomer;
};
