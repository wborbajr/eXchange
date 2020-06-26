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
      // createdAt: {
      //   type: "TIMESTAMP",
      //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      //   allowNull: false,
      // },
      // updatedAt: {
      //   type: "TIMESTAMP",
      //   defaultValue: Sequelize.literal(
      //     "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      //   ),
      //   allowNull: false,
      // },
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
      createdAt: "created",
      updatedAt: "modified",
    }
  );

  return Bank;
};

// CREATE TABLE `test_table` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `stamp_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
//   `stamp_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

// INSERT INTO test_table
// (name)
// VALUES
// ('jacur')
// ON DUPLICATE KEY UPDATE NAME='sanfona';
