/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Identification = sequelize.define("identification", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    nameidentification: {
      type: Sequelize.STRING(100),
      allowNull: true,
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

  return Identification;
};
