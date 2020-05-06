/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Licensecountry =  sequelize.define('licensecountry', {
    // idlicense: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    namelicense: {
      type: Sequelize.STRING(40),
      allowNull: true
    }
  });

  return Licensecountry;
};
