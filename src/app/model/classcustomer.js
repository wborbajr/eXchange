/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Classcustomer = sequelize.define(
    "classcustomer",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      description: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      seeincompany: {
        type: Sequelize.INTEGER(1),
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
      tableName: "t_classcustomer",
      timestamps: true,
      paranoid: true,
      underscored: true,
      createdAt: "created",
      updatedAt: "modified",
    }
  );

  return Classcustomer;
};
