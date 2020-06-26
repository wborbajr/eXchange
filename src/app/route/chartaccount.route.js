module.exports = function (app) {
  const chartaccounts = require("../controllers/chartaccount.controller.js");

  // Create a new
  app.post("/api/chartaccounts/create", chartaccounts.create);

  // Retrieve all
  app.get("/api/chartaccounts", chartaccounts.findAll);

  // Retrieve a single by Id
  app.get("/api/chartaccounts/:chartaccountId", chartaccounts.findByPk);

  // Update a with Id
  app.put("/api/chartaccounts/:chartaccountId", chartaccounts.update);

  // Delete a with Id
  app.delete("/api/chartaccounts/:chartaccountId", chartaccounts.delete);
};
