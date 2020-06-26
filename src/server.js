const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./app/models");

// Load config
dotenv.config({ path: "./config/config.env" });

const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 9090;

app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "XCR3rsasa%RDHHH",
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

// force: true will drop the table if it already exists
// TODO: comment
// const run = async () => {};

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
//   run();
// });
// TODO: comment

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

// Create a Server
app.listen(
  PORT,
  console.log(
    `🚀 Server eXchange running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
  )
);
