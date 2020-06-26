/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Parameter = sequelize.define(
    "parameter",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      client: {
        type: Sequelize.STRING(80),
        allowNull: true,
      },
      exchange_vl_month: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      exchange_vl_year: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      exchange_vl_wire: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      exchange_comission: {
        type: Sequelize.DECIMAL,
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
      tableName: "t_parameter",
      timestamps: true,
      paranoid: true,
      underscored: true,
      createdAt: "created",
      updatedAt: "modified",
    }
  );
  return Parameter;
};
