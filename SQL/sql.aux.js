
db.bank = require('../model/bank.js')(sequelize, Sequelize);
db.cashflow = require('../model/cashflow.js')(sequelize, Sequelize);
db.chartaccount = require('../model/chartaccounts.js')(sequelize, Sequelize);
db.city = require('../model/city.js')(sequelize, Sequelize);
db.classcustomer = require('../model/classcustomer.js')(sequelize, Sequelize);
db.coverage = require('../model/coverage.js')(sequelize, Sequelize);
db.customer = require('../model/customer.js')(sequelize, Sequelize);
db.identification = require('../model/identification.js')(sequelize, Sequelize);
db.licensecountry = require('../model/licensecountry.js')(sequelize, Sequelize);
db.login = require('../model/login.js')(sequelize, Sequelize);
db.maker = require('../model/maker.js')(sequelize, Sequelize);
db.menu_options = require('../model/menu_options.js')(sequelize, Sequelize);
db.parameters = require('../model/parameters.js')(sequelize, Sequelize);
db.product = require('../model/product.js')(sequelize, Sequelize);
db.teste = require('../model/teste.js')(sequelize, Sequelize);
db.typeproduct = require('../model/typeproduct.js')(sequelize, Sequelize);
db.wiredetail = require('../model/wiredetail.js')(sequelize, Sequelize);