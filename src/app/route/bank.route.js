module.exports = function (app) {
  const banks = require("../controllers/bank.controller.js");

  // Create a new
  app.post("/api/banks/create", banks.create);

  // Retrieve all
  app.get("/api/banks", banks.findAll);

  // Retrieve a single by Id
  app.get("/api/banks/:bankId", banks.findByPk);

  // Update a with Id
  app.put("/api/banks/:bankId", banks.update);

  // Delete a with Id
  app.delete("/api/banks/:bankId", banks.delete);
};
