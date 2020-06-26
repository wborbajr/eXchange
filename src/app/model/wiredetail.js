/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Wiredetail = sequelize.define(
    "wiredetail",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      qtdwire: {
        type: Sequelize.DOUBLE,
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
    { tableName: "t_wiredetail", paranoid: true }
  );

  return Wiredetail;
};
