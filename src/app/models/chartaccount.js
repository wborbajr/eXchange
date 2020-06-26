/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Chartaccount = sequelize.define(
    "chartaccount",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      namechartaccount: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      io: {
        type: Sequelize.STRING(1),
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
      tableName: "t_chartaccount",
      timestamps: true,
      paranoid: true,
      underscored: true,
      // createdAt: "created",
      // updatedAt: "modified",
    }
  );

  return Chartaccount;
};
