/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Classcustomer = sequelize.define("classcustomer", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    description: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    seeincompany: {
      type: Sequelize.INTEGER(1),
      allowNull: true,
    },
  });

  return Classcustomer;
};
