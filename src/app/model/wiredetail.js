/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Wiredetail = sequelize.define('wiredetail', {
    wire_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_idcashflow: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    fk_idcountry: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    qtdwire: {
      type: Sequelize.DOUBLE,
      allowNull: true
    }
  });

  return Wiredetail;
};
