/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const Parameter = sequelize.define('parameter', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
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
