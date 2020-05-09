/* jshint indent: 2 */

const bcrypt = require('bcryptjs')

module.exports = function (sequelize, Sequelize) {
  const Login = sequelize.define('login', {
    uuid: {
      // primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    username: {
      type: Sequelize.STRING(40),
      allowNull: false,
      validate: {
        len: {
          args: [0, 40],
          msg: 'Username must be maximum length 40 characters'
        }
      }
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      set(value) {
        // value = crypto.createHash("sha1").update(value, "binary").digest("hex");

        // const salt = crypto.randomBytes(128).toString('base64');
        // const hmac = crypto.createHmac('sha256', salt);
        // this.setDataValue('password', hmac.update(value).digest('hex'));

        const salt = bcrypt.genSaltSync(9);
        const encrypted = bcrypt.hashSync(value, salt);
        this.setDataValue('password', encrypted);
      }
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: true,
      validate: {
        len: {
          args: [0, 40],
          msg: 'Name must be maximum length 40 characters'
        }
      }
    },
    email: {
      type: Sequelize.STRING(40),
      allowNull: true,
      validate: {
        isEmail: {
          msg: 'Not a valid email.'
        }
      }
    },
    perfil: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    active: {
      type: Sequelize.CHAR(1),
      allowNull: true
    }
  });


  return Login;
};