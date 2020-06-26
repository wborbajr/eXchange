module.exports = function (app) {
  const products = require("../controllers/product.controller.js");

  // Create a new
  app.post("/api/products/create", products.create);

  // Retrieve all
  app.get("/api/products", products.findAll);

  // Retrieve a single by Id
  app.get("/api/products/:productId", products.findByPk);

  // Update a with Id
  app.put("/api/products/:productId", products.update);

  // Delete a with Id
  app.delete("/api/products/:productId", products.delete);
};
