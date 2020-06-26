module.exports = function (app) {
  const classcustomers = require("../controllers/classcustomer.controller.js");

  // Create a new
  app.post("/api/classcustomers/create", classcustomers.create);

  // Retrieve all
  app.get("/api/classcustomers", classcustomers.findAll);

  // Retrieve a single by Id
  app.get("/api/classcustomers/:classcustomerId", classcustomers.findByPk);

  // Update a with Id
  app.put("/api/classcustomers/:classcustomerId", classcustomers.update);

  // Delete a with Id
  app.delete("/api/classcustomers/:classcustomerId", classcustomers.delete);
};
