const Sequelize = require("sequelize");
const env = require("../config/env.js");

// const db = require("./db.js");

const db = {};

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  // define: {
  //   timestamps: false,
  // },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//
//Models/tables
db.banks = require("./bank.js")(sequelize, Sequelize);
db.cashflows = require("./cashflow.js")(sequelize, Sequelize);
db.chartaccounts = require("./chartaccount.js")(sequelize, Sequelize);
db.cities = require("./city.js")(sequelize, Sequelize);
db.classcustomers = require("./classcustomer.js")(sequelize, Sequelize);
db.coverages = require("./coverage.js")(sequelize, Sequelize);
db.customers = require("./customer.js")(sequelize, Sequelize);
db.identifications = require("./identification.js")(sequelize, Sequelize);
db.licensecountries = require("./licensecountry.js")(sequelize, Sequelize);
db.logins = require("./login.js")(sequelize, Sequelize);
db.makers = require("./maker.js")(sequelize, Sequelize);
db.menus = require("./menu.js")(sequelize, Sequelize);
db.parameters = require("./parameter.js")(sequelize, Sequelize);
db.products = require("./product.js")(sequelize, Sequelize);
db.typeproducts = require("./typeproduct.js")(sequelize, Sequelize);
db.wiredetails = require("./wiredetail.js")(sequelize, Sequelize);

//
// Cash Flow - association
db.cashflows.belongsTo(db.products, {
  foreignKey: "fk_productid",
  targetKey: "id",
});
db.products.hasMany(db.cashflows, {
  foreignKey: "fk_productid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.typeproducts, {
  foreignKey: "fk_typeproductid",
  targetKey: "id",
});
db.typeproducts.hasMany(db.cashflows, {
  foreignKey: "fk_typeproductid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.banks, {
  foreignKey: "fk_clientbankid",
  targetKey: "id",
});
db.banks.hasMany(db.cashflows, {
  foreignKey: "fk_clientbankid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.banks, {
  foreignKey: "fk_masterbankid",
  targetKey: "id",
});
db.banks.hasMany(db.cashflows, {
  foreignKey: "fk_masterbankid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.banks, {
  foreignKey: "fk_masterbankid",
  targetKey: "id",
});
db.banks.hasMany(db.cashflows, {
  foreignKey: "fk_masterbankid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.cities, {
  foreignKey: "fk_cityid",
  targetKey: "id",
});
db.cities.hasMany(db.cashflows, {
  foreignKey: "fk_cityid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.makers, {
  foreignKey: "fk_makerid",
  targetKey: "id",
});
db.makers.hasMany(db.cashflows, {
  foreignKey: "fk_makerid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.coverages, {
  foreignKey: "fk_coverageid",
  targetKey: "id",
});
db.coverages.hasMany(db.cashflows, {
  foreignKey: "fk_coverageid",
  targetKey: "id",
});

db.cashflows.belongsTo(db.chartaccounts, {
  foreignKey: "fk_chartaccountid",
  targetKey: "id",
});
db.chartaccounts.hasMany(db.cashflows, {
  foreignKey: "fk_chartaccountid",
  targetKey: "id",
});

//
// Customer - association
db.customers.belongsTo(db.cities, {
  foreignKey: "fk_cityid",
  targetKey: "id",
});
db.cities.hasOne(db.customers, {
  foreignKey: "fk_cityid",
  targetKey: "id",
});

db.customers.belongsTo(db.identifications, {
  foreignKey: "fk_identificationid",
  targetKey: "id",
});
db.identifications.hasOne(db.customers, {
  foreignKey: "fk_identificationid",
  targetKey: "id",
});

db.customers.belongsTo(db.classcustomers, {
  foreignKey: "fk_classcustomerid",
  targetKey: "id",
});
db.classcustomers.hasOne(db.customers, {
  foreignKey: "fk_classcustomerid",
  targetKey: "id",
});

//
// WireDetail - association
db.wiredetails.belongsTo(db.cities, {
  foreignKey: "fk_countryid",
  targetKey: "id",
});
db.cities.hasOne(db.wiredetails, {
  foreignKey: "fk_countryid",
  targetKey: "id",
});

db.wiredetails.belongsTo(db.cashflows, {
  foreignKey: "fk_cashflowid",
  targetKey: "id",
});
db.cashflows.hasOne(db.wiredetails, {
  foreignKey: "fk_cashflowid",
  targetKey: "id",
});

//
//
module.exports = db;
