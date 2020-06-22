/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Product = sequelize.define("product", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    nameproduct: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    amountproduct: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    productvalue: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: "0.00",
    },
    percentcomis: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: "0.00",
    },
    percentchq: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: "0.00",
    },
    rule: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: "3",
    },
    movetype: {
      type: Sequelize.STRING(1),
      allowNull: true,
    },
  });

  return Product;
};
