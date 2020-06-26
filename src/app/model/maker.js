/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Maker = sequelize.define("maker", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    namemaker: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE(3),
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
    },
    updated_at: {
      type: Sequelize.DATE(3),
      defaultValue: Sequelize.literal(
        "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
      ),
    },
  });

  return Maker;
};
