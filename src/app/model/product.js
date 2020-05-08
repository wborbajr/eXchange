/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Product = sequelize.define('product', {
    // idproduct: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    // fk_idtypeproduct: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: true
    // },
    nameproduct: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    amountproduct: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    productvalue: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: '0.00'
    },
    percentcomis: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: '0.00'
    },
    percentchq: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false,
      defaultValue: '0.00'
    },
    rule: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '3'
    },
    movetype: {
      type: Sequelize.STRING(1),
      allowNull: true
    }
  });

  return Product;
};
