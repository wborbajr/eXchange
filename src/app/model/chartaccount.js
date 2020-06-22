/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Chartaccount = sequelize.define("chartaccount", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    namechartaccount: {
      type: Sequelize.STRING(40),
      allowNull: true,
    },
    io: {
      type: Sequelize.STRING(1),
      allowNull: true,
    },
  });

  return Chartaccount;
};
