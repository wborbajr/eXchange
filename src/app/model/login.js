/* jshint indent: 2 */

const bcrypt = require("bcryptjs");

module.exports = function (sequelize, Sequelize) {
  const Login = sequelize.define(
    "login",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      username: {
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
          len: {
            args: [0, 40],
            msg: "Username must be maximum length 40 characters",
          },
        },
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        len: [6, 20],
        set(value) {
          const salt = bcrypt.genSaltSync(9);
          const encrypted = bcrypt.hashSync(value, salt);
          this.setDataValue("password", encrypted);
        },
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: true,
        validate: {
          len: {
            args: [0, 40],
            msg: "Name must be maximum length 40 characters",
          },
        },
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        validate: {
          isEmail: {
            msg: "Not a valid email.",
          },
        },
      },
      perfil: {
        type: Sequelize.CHAR(1),
        allowNull: true,
      },
      active: {
        type: Sequelize.CHAR(1),
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
    { tableName: "t_login", paranoid: true }
  );

  return Login;
};
