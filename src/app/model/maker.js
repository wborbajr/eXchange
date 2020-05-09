/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Maker = sequelize.define('maker', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    namemaker: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });

  return Maker;
};
