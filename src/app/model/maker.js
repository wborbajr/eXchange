/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Maker = sequelize.define('maker', {
    // idmaker: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    namemaker: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });

  return Maker;
};
