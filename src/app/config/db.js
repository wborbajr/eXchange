const Sequelize = require("sequelize");
const env = require("./env.js");

const db = {};

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  define: {
    timestamps: false,
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.export = db;
