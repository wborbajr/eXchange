/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Wiredetail = sequelize.define("wiredetail", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    qtdwire: {
      type: Sequelize.DOUBLE,
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

  return Wiredetail;
};
