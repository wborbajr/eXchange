const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//
//Models/tables
db.banks = require('../model/bank.js')(sequelize, Sequelize);
db.cashflows = require('../model/cashflow.js')(sequelize, Sequelize);
db.chartaccounts = require('../model/chartaccount.js')(sequelize, Sequelize);
db.cities = require('../model/city.js')(sequelize, Sequelize);
db.classcustomers = require('../model/classcustomer.js')(sequelize, Sequelize);
db.coverages = require('../model/coverage.js')(sequelize, Sequelize);
db.customers = require('../model/customer.js')(sequelize, Sequelize);
db.identifications = require('../model/identification.js')(sequelize, Sequelize);
db.licensecountries = require('../model/licensecountry.js')(sequelize, Sequelize);
db.logins = require('../model/login.js')(sequelize, Sequelize);
db.makers = require('../model/maker.js')(sequelize, Sequelize);
db.menu_options = require('../model/menu_option.js')(sequelize, Sequelize);
db.parameters = require('../model/parameter.js')(sequelize, Sequelize);
db.products = require('../model/product.js')(sequelize, Sequelize);
db.testes = require('../model/teste.js')(sequelize, Sequelize);
db.typeproducts = require('../model/typeproduct.js')(sequelize, Sequelize);
db.wiredetails = require('../model/wiredetail.js')(sequelize, Sequelize);

//
// Cash Flow - association
db.cashflows.belongsTo(db.products, { foreignKey: 'fk_productid', targetKey: 'id' });
db.products.hasMany(db.cashflows, { foreignKey: 'fk_productid', targetKey: 'id' });

db.cashflows.belongsTo(db.typeproducts, { foreignKey: 'fk_typeproductid', targetKey: 'id' });
db.typeproducts.hasMany(db.cashflows, { foreignKey: 'fk_typeproductid', targetKey: 'id' });

db.cashflows.belongsTo(db.banks, { foreignKey: 'fk_clientbankid', targetKey: 'id' });
db.banks.hasMany(db.cashflows, { foreignKey: 'fk_clientbankid', targetKey: 'id' });

db.cashflows.belongsTo(db.banks, { foreignKey: 'fk_masterbankid', targetKey: 'id' });
db.banks.hasMany(db.cashflows, { foreignKey: 'fk_masterbankid', targetKey: 'id' });

db.cashflows.belongsTo(db.banks, { foreignKey: 'fk_masterbankid', targetKey: 'id' });
db.banks.hasMany(db.cashflows, { foreignKey: 'fk_masterbankid', targetKey: 'id' });

db.cashflows.belongsTo(db.cities, { foreignKey: 'fk_cityid', targetKey: 'id' });
db.cities.hasMany(db.cashflows, { foreignKey: 'fk_cityid', targetKey: 'id' });

db.cashflows.belongsTo(db.makers, { foreignKey: 'fk_makerid', targetKey: 'id' });
db.makers.hasMany(db.cashflows, { foreignKey: 'fk_makerid', targetKey: 'id' });

db.cashflows.belongsTo(db.coverages, { foreignKey: 'fk_coverageid', targetKey: 'id' });
db.coverages.hasMany(db.cashflows, { foreignKey: 'fk_coverageid', targetKey: 'id' });

db.cashflows.belongsTo(db.chartaccounts, { foreignKey: 'fk_chartaccountid', targetKey: 'id' });
db.chartaccounts.hasMany(db.cashflows, { foreignKey: 'fk_chartaccountid', targetKey: 'id' });

//
// Customer - association
db.customers.belongsTo(db.cities, { foreignKey: 'fk_cityid', targetKey: 'id' });
db.cities.hasOne(db.customers, { foreignKey: 'fk_cityid', targetKey: 'id' });

db.customers.belongsTo(db.identifications, { foreignKey: 'fk_identificationid', targetKey: 'id' });
db.identifications.hasOne(db.customers, { foreignKey: 'fk_identificationid', targetKey: 'id' });

db.customers.belongsTo(db.classcustomers, { foreignKey: 'fk_classcustomerid', targetKey: 'id' });
db.classcustomers.hasOne(db.customers, { foreignKey: 'fk_classcustomerid', targetKey: 'id' });

//
//

module.exports = db;