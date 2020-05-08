/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Typeproduct = sequelize.define('typeproduct', {
    // idtypeproduct: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true
    // },
    nametypeproduct: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });

  return Typeproduct;
};
