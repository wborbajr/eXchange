/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Wiredetail = sequelize.define('wiredetail', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    qtdwire: {
      type: Sequelize.DOUBLE,
      allowNull: true
    }
  });

  return Wiredetail;
};
