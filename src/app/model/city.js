/* jshint indent: 2 */

module.exports = function (sequelize, Sequelize) {
  const City = sequelize.define('city', {
    // idcity: {
    //   type: Sequelize.INTEGER(10).UNSIGNED,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    name_city: {
      type: Sequelize.STRING(40),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field is required"
        },
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "Only letters allowed"
        },
        len: {
          args: [4, 40],
          msg: "String length is not in this range {4,40}"
        },
        notNull: {
          args: true,
          msg: "String can not be null"
        }
      }
    }
  });

  return City
};
