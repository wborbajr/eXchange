const db = require("../model");
const Classcustomer = db.classcustomers;

// Post
exports.create = (req, res) => {
  // console.log(req.body);
  // console.log(`Customer: ${Customer}`)

  // Save to MariaDB database
  Classcustomer.create(req.body)
    .then((classcustomer) => {
      // Send created classcustomer to client
      res.json(classcustomer);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Classcustomer.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((classcustomers) => {
      res.json(classcustomers);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  // console.log(`Customer: ${Customer}`)

  Classcustomer.findByPk(req.params.classcustomerId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((classcustomer) => {
      if (!classcustomer) {
        return res.status(404).json({ message: "Class Customer Not Found" });
      }
      return res.status(200).json(classcustomer);
    })
    .catch((error) => res.status(400).send(error));
};

// Update by Id
exports.update = (req, res) => {
  return Classcustomer.findByPk(req.params.classcustomerId)
    .then((classcustomer) => {
      if (!classcustomer) {
        return res.status(404).json({
          message: "Class Customer Not Found",
        });
      }
      return classcustomer
        .update({
          description: req.body.description,
          seeincompany: req.body.seeincompany,
        })
        .then(() => res.status(200).json(customer))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete a by Id
exports.delete = (req, res) => {
  return Classcustomer.findByPk(req.params.classcustomerId)
    .then((classcustomer) => {
      if (!classcustomer) {
        return res.status(400).send({
          message: "Customer Not Found",
        });
      }

      return classcustomer
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
