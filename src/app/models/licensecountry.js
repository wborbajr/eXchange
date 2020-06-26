/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Licensecountry = sequelize.define(
    "licensecountry",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      namelicense: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      // createdAt: {
      //   type: "TIMESTAMP(3)",
      //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      //   allowNull: false,
      // },
      // updatedAt: {
      //   type: "TIMESTAMP(3)",
      //   defaultValue: Sequelize.literal(
      //     "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
      //   ),
      //   allowNull: false,
      // },
    },
    {
      engine: "InnoDB",
      charset: "utf8",
    },
    {
      tableName: "t_licensecountry",
      timestamps: true,
      paranoid: true,
      underscored: true,
      createdAt: "created",
      updatedAt: "modified",
    }
  );

  return Licensecountry;
};