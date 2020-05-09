/* jshint indent: 2 */

const crypto = require('crypto')

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
        value = crypto.createHash("sha1").update(value, "binary").digest("hex");
        this.setDataValue('password', value);
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
  }
    // , {
    //   instanceMethods: {
    //     generateHash: function (password) {
    //       return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    //     },
    //     validPassword: function (password) {
    //       return bcrypt.compareSync(password, this.password)
    //     }
    //   }
    // }





  );

  // Login.beforeCreate((login, options) => {

  //   return bcrypt.hash(login.senha, 10)
  //     .then(hash => {
  //       login.senha = hash;
  //     })
  //     .catch(err => {
  //       throw new Error();
  //     });
  // });

  return Login;
};




// import Sequelize from 'sequelize'
// import bcrypt from 'bcrypt-nodejs'
// import connection from '../config/db'

// require('sequelize-isunique-validator')(Sequelize)

// let User = connection.define('user', {
//   firstName: {
//     type: Sequelize.STRING(50),
//     allowNull: false,
//     validate: {
//       len: {
//         args: [0, 50],
//         msg: 'El nombre tiene demasiados carácteres'
//       }
//     }
//   },
//   lastName: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     validate: {
//       len: {
//         args: [0, 100],
//         msg: 'Los apellidos tienen demasiados carácteres'
//       }
//     }
//   },
//   email: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: {
//         msg: 'No es una dirección de correo electrónico.'
//       },
//       isUnique: connection.validateIsUnique(
//         'email',
//         'Esta dirección de correo electrónico ya existe.'
//       )
//     }
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   instanceMethods: {
//     generateHash: function (password) {
//       return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
//     },
//     validPassword: function (password) {
//       return bcrypt.compareSync(password, this.password)
//     }
//   }
// })

// User.sync()

// export default User