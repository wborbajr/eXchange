/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Cashflow = sequelize.define(
    "cashflow",
    {
      uuid: {
        // primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      customer_phone: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      dtcashflow: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      tchaflow: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      amountflow: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      valueflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      centsflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      cents2flow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      check_number: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      percentflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      valuepercentflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      airpercentflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      aircomisvalue: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      airreservation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      airdtemiuntil: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      totalflow: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      movetype: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      totaltopay: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
        defaultValue: "0.00",
      },
      cashflowok: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      cashflowobs: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cashfloworigin: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      wire: {
        type: Sequelize.CHAR(3),
        allowNull: true,
      },
      subtotalflow: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      idlogin: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      vin: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      year: {
        type: Sequelize.CHAR(4),
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING(100),
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
      timestamps: true,
      underscored: true,
      createdAt: "created",
      // updatedAt: "modified",
      // tableName: "t_cashflow",
      paranoid: true,
    }
  );

  return Cashflow;
};
