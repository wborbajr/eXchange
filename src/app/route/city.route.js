module.exports = function (app) {
  const cities = require("../controller/city.controller.js");

  // Create a new
  app.post("/api/cities/create", cities.create);

  // Retrieve all
  app.get("/api/cities", cities.findAll);

  // Retrieve a single by Id
  app.get("/api/cities/:cityId", cities.findByPk);

  // Update a with Id
  app.put("/api/cities/:cityId", cities.update);

  // Delete a with Id
  app.delete("/api/cities/:cityId", cities.delete);
};
