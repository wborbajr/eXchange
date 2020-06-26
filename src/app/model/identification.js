/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Identification = sequelize.define(
    "identification",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      nameidentification: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      createdAt: {
        type: "TIMESTAMP(3)",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP(3)",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        ),
        allowNull: false,
      },
    },
    {
      engine: "InnoDB",
      charset: "utf8",
    },
    { tableName: "t_identification", paranoid: true }
  );
  return Identification;
};
