module.exports = function (app) {
  const licensecountries = require("../controller/licensecountry.controller.js");

  // Create a new
  app.post("/api/licensecountries/create", licensecountries.create);

  // Retrieve all
  app.get("/api/licensecountries", licensecountries.findAll);

  // Retrieve a single by Id
  app.get("/api/licensecountries/:licensecountryId", licensecountries.findByPk);

  // Update a with Id
  app.put("/api/licensecountries/:licensecountryId", licensecountries.update);

  // Delete a with Id
  app.delete(
    "/api/licensecountries/:licensecountryId",
    licensecountries.delete
  );
};
