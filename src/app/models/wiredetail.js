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
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      },
      updatedAt: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      },
    },
    {
      engine: "InnoDB",
      charset: "utf8",
    },
    {
      tableName: "t_wiredetail",
      timestamps: true,
      paranoid: true,
      underscored: true,
      // createdAt: "created",
      // updatedAt: "modified",
    }
  );

  return Wiredetail;
};
