const db = require("../model");
const Identification = db.identifications;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Identification.create(req.body)
    .then((identification) => {
      // Send created identification to client
      res.json(identification);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Identification.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((identifications) => {
      res.json(identifications);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Identification.findByPk(req.params.identificationId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((identification) => {
      if (!identification) {
        return res.status(404).json({ message: "Identification Not Found" });
      }
      return res.status(200).json(identification);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Identification.findByPk(req.params.identificationId)
    .then((identification) => {
      if (!identification) {
        return res.status(404).json({
          message: "Identification Not Found",
        });
      }
      return identification
        .update({
          nameidentification: req.body.nameidentification,
        })
        .then(() => res.status(200).json(identification))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Identification.findByPk(req.params.identificationId)
    .then((identification) => {
      if (!identification) {
        return res.status(400).send({
          message: "Identification Not Found",
        });
      }

      return identification
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
