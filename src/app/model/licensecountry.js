/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Licensecountry = sequelize.define("licensecountry", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    namelicense: {
      type: Sequelize.STRING(40),
      allowNull: true,
    },
  });

  return Licensecountry;
};
