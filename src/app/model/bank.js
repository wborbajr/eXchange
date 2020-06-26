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
    { tableName: "t_bank", paranoid: true }
  );

  return Bank;
};

// CREATE TABLE `test_table` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `stamp_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
//   `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
