const db = require("../model");
const Product = db.products;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Product.create(req.body)
    .then((product) => {
      // Send created product to client
      res.json(product);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Product.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((products) => {
      res.json(products);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Product.findByPk(req.params.productId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product Not Found" });
      }
      return res.status(200).json(product);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Product.findByPk(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product Not Found",
        });
      }
      return product
        .update({
          nameproduct: req.body.nameproduct,
          amountproduct: req.body.amountproduct,
          productvalue: req.body.productvalue,
          percentcomis: req.body.percentcomis,
          percentchq: req.body.percentchq,
          rule: req.body.rule,
          rmovetypele: req.body.movetype,
        })
        .then(() => res.status(200).json(product))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Product.findByPk(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(400).send({
          message: "Product Not Found",
        });
      }

      return product
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
