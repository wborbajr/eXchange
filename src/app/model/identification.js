/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Identification = sequelize.define('identification', {
    // ididentification: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    nameidentification: {
      type: Sequelize.STRING(100),
      allowNull: true
    }
  });

  return Identification;
};
