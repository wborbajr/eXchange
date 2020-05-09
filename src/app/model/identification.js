/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Identification = sequelize.define('identification', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    nameidentification: {
      type: Sequelize.STRING(100),
      allowNull: true
    }
  });

  return Identification;
};
