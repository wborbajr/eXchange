/* jshint indent: 2 */

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
      allowNull: false
    },

  });


  // Method 3 via the direct method
  // Test.beforeCreate(async (test, options) => {
  //   const hashedPassword = await hashPassword(test.password);
  //   test.password = hashedPassword;
  // });


  return Test
}
