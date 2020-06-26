/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Menu = sequelize.define(
    "menu",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      menu: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      menu_description: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      path: {
        type: Sequelize.STRING(80),
        allowNull: true,
      },
      sub_menu: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      seq: {
        type: Sequelize.INTEGER(10).UNSIGNED,
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
      tableName: "t_menu",
      timestamps: true,
      paranoid: true,
      underscored: true,
      createdAt: "created",
      updatedAt: "modified",
    }
  );
  return Menu;
};
