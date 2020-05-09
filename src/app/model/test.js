/* jshint indent: 2 */

const bcrypt = require('bcryptjs')

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
    company: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      len: [6, 20],
      set(value) {
        // v1
        // value = crypto.createHash("sha1").update(value, "binary").digest("hex");

        // v2
        // const salt = crypto.randomBytes(128).toString('base64');
        // const hmac = crypto.createHmac('sha256', salt);
        // this.setDataValue('password', hmac.update(value).digest('hex'));

        // v3
        const salt = bcrypt.genSaltSync(9);
        const encrypted = bcrypt.hashSync(value, salt);
        this.setDataValue('password', encrypted);

      }
    },

  });

  return Test
}
