/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const City = sequelize.define(
    "city",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      name_city: {
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Field is required",
          },
          is: {
            args: ["^[a-z]+$", "i"],
            msg: "Only letters allowed",
          },
          len: {
            args: [4, 40],
            msg: "String length is not in this range {4,40}",
          },
          notNull: {
            args: true,
            msg: "String can not be null",
          },
        },
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
      tableName: "t_city",
      timestamps: true,
      paranoid: true,
      underscored: true,
      // createdAt: "created",
      // updatedAt: "modified",
    }
  );

  return City;
};
