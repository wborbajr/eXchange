const express = require('express');
const session = require('express-session');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

// app.use(
//   bodyParser.json(),
//   session({
//     secret: cookie_secret,
//     name: cookie_name,
//     store: sessionStore, // connect-mongo session store
//     proxy: true,
//     resave: true,
//     saveUninitialized: true
//   })
// );

app.options('*', cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'XCR3rsasa%RDHHH',
    cookie: {
      maxAge: (1000 * 60 * 100)
    }
  }));

// force: true will drop the table if it already exists
// TO-DO comment
const db = require('./app/config/db.config.js');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});
// TO-DO comment

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
require('./app/route/maker.route.js')(app);
require('./app/route/menu.route.js')(app);
require('./app/route/parameter.route.js')(app);
require('./app/route/product.route.js')(app);
require('./app/route/wiredetail.route.js')(app);
require('./app/route/auth.route.js')(app);

// Create a Server
var server = app.listen(9090, "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("eXchange Server listening at http://%s:%s", host, port)
})