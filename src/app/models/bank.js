/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Bank = sequelize.define(
    "bank",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      namebank: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      agency: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      count: {
        type: Sequelize.STRING(15),
        allowNull: false,
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
      timestamps: true,
      tableName: "t_bank",
      paranoid: true,
      underscored: true,
      // createdAt: "created",
      // updatedAt: "modified",
    }
  );

  return Bank;
};
