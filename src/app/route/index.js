const express = require("express");
const router = express.Router();

require("./app/route/customer.route.js")(app);
require("./app/route/bank.route.js")(app);
require("./app/route/city.route.js")(app);
require("./app/route/typeproduct.route.js")(app);
require("./app/route/identification.route.js")(app);
require("./app/route/coverage.route.js")(app);
require("./app/route/licensecountry.route.js")(app);
require("./app/route/classcustomer.route.js")(app);
require("./app/route/cashflow.route.js")(app);
require("./app/route/chartaccount.route.js")(app);
require("./app/route/login.route.js")(app);
require("./app/route/maker.route.js")(app);
require("./app/route/menu.route.js")(app);
require("./app/route/parameter.route.js")(app);
require("./app/route/product.route.js")(app);
require("./app/route/wiredetail.route.js")(app);
require("./app/route/auth.route.js")(app);

module.exports = router;
