/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Typeproduct = sequelize.define("typeproduct", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    nametypeproduct: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  });

  return Typeproduct;
};
