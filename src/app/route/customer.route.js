module.exports = function (app) {
  const customers = require("../controllers/customer.controller.js");

  // Create a new
  app.post("/api/customers/create", customers.create);

  // Retrieve all
  app.get("/api/customers", customers.findAll);

  // Retrieve a single by Id
  app.get("/api/customers/:customerId", customers.findByPk);

  // Update a with Id
  app.put("/api/customers/:customerId", customers.update);

  // Delete a with Id
  app.delete("/api/customers/:customerId", customers.delete);
};
