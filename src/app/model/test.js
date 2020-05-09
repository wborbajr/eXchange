/* jshint indent: 2 */

const crypto = require('crypto')
// var shasum = crypto.createHash('sha1')


module.exports = function (sequelize, Sequelize) {
  const Test = sequelize.define('test', {
    uuid: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    username: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      set(value) {
        value = crypto.createHash("sha1").update(value, "binary").digest("hex");
        this.setDataValue('password', value);
      }
    },

  });

  return Test
}
