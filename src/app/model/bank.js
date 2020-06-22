/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Bank = sequelize.define("bank", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    namebank: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    agency: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
    count: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
  });

  return Bank;
};
