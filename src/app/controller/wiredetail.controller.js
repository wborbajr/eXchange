const db = require("../models");
const Wiredetail = db.wiredetails;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Wiredetail.create(req.body)
    .then((wiredetail) => {
      // Send created wiredetail to client
      res.json(wiredetail);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Wiredetail.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((wiredetails) => {
      res.json(wiredetails);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Wiredetail.findByPk(req.params.wiredetailId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((wiredetail) => {
      if (!wiredetail) {
        return res.status(404).json({ message: "Wiredetail Not Found" });
      }
      return res.status(200).json(wiredetail);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Wiredetail.findByPk(req.params.wiredetailId)
    .then((wiredetail) => {
      if (!wiredetail) {
        return res.status(404).json({
          message: "Wiredetail Not Found",
        });
      }
      return wiredetail
        .update({
          qtdwire: req.body.qtdwire,
        })
        .then(() => res.status(200).json(wiredetail))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Wiredetail.findByPk(req.params.wiredetailId)
    .then((wiredetail) => {
      if (!wiredetail) {
        return res.status(400).send({
          message: "Wiredetail Not Found",
        });
      }

      return wiredetail
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
