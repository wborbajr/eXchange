/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  const Menu_option = sequelize.define('menu_option', {
    idmenu_options: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    menu_description: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    path: {
      type: Sequelize.STRING(80),
      allowNull: true
    },
    sub_menu: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    seq: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  });

  return Menu_option;
};