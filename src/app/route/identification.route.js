module.exports = function (app) {
  const identification = require("../controllers/identification.controller.js");

  // Create a new
  app.post("/api/identifications/create", identification.create);

  // Retrieve all
  app.get("/api/identifications", identification.findAll);

  // Retrieve a single by Id
  app.get("/api/identifications/:identificationId", identification.findByPk);

  // Update a with Id
  app.put("/api/identifications/:identificationId", identification.update);

  // Delete a with Id
  app.delete("/api/identifications/:identificationId", identification.delete);
};
