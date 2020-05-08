var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./app/route/customer.route.js')(app);
require('./app/route/bank.route.js')(app);
require('./app/route/city.route.js')(app);
require('./app/route/typeproduct.route.js')(app);
require('./app/route/identification.route.js')(app);
require('./app/route/coverage.route.js')(app);
require('./app/route/licensecountry.route.js')(app);
require('./app/route/classcustomer.route.js')(app);
require('./app/route/cashflow.route.js')(app);
require('./app/route/chartaccount.route.js')(app);
require('./app/route/login.route.js')(app);

// Create a Server
var server = app.listen(9090, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})