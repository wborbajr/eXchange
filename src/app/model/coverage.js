/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Coverage = sequelize.define('coverage', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    namecoverage: {
      type: Sequelize.STRING(20),
      allowNull: true
    }
  });

  return Coverage;
};
