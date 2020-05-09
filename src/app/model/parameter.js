/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Parameter = sequelize.define('parameter', {
    // id_parameter: {
    //   type: Sequelize.INTEGER(10).UNSIGNED,
    //   allowNull: false,
    //   primaryKey: true
    // },
    client: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    exchange_vl_month: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    exchange_vl_year: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    exchange_vl_wire: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    exchange_comission: {
      type: Sequelize.DECIMAL,
      allowNull: true
    }
    // ,
    // fk_idclient: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: true
    // }
  });

  return Parameter;
};
