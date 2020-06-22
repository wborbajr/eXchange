/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Customer = sequelize.define("customer", {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    typecustomer: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    andress: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    phone2: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    zipcode: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    // city: {
    //   type: Sequelize.STRING(40),
    //   allowNull: true
    // },
    state: {
      type: Sequelize.STRING(40),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    dtbirth: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    numidentification: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    comissionpercent: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: true,
      defaultValue: "0.00",
    },
    attention: {
      type: Sequelize.CHAR(250),
      allowNull: true,
    },
    picture_path: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    active: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    restriction: {
      type: Sequelize.INTEGER(1),
      allowNull: true,
    },
  });

  return Customer;
};
