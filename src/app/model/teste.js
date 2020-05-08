/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('teste', {
    hora: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'teste'
  });
};
