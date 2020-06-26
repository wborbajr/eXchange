const express = require("express");
const router = express.Router();

require("customer.route.js")(app);
require("bank.route.js")(app);
require("city.route.js")(app);
require("typeproduct.route.js")(app);
require("identification.route.js")(app);
require("coverage.route.js")(app);
require("licensecountry.route.js")(app);
require("classcustomer.route.js")(app);
require("cashflow.route.js")(app);
require("chartaccount.route.js")(app);
require("login.route.js")(app);
require("maker.route.js")(app);
require("menu.route.js")(app);
require("parameter.route.js")(app);
require("product.route.js")(app);
require("wiredetail.route.js")(app);
require("auth.route.js")(app);

module.exports = router;
