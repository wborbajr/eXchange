module.exports = function (app) {
  const menus = require("../controller/menu.controller.js");

  // Create a new
  app.post("/api/menus/create", menus.create);

  // Retrieve all
  app.get("/api/menus", menus.findAll);

  // Retrieve a single by Id
  app.get("/api/menus/:menuId", menus.findByPk);

  // Update a with Id
  app.put("/api/menus/:menuId", menus.update);

  // Delete a with Id
  app.delete("/api/menus/:menuId", menus.delete);
};
