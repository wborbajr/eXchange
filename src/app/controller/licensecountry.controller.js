const db = require("../config/db.config.js");
const Licensecountry = db.licensecountries;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Licensecountry.create(req.body)
    .then((licensecountry) => {
      // Send created licensecountry to client
      res.json(licensecountry);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Licensecountry.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((licensecountries) => {
      res.json(licensecountries);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Licensecountry.findByPk(req.params.licensecountryId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((licensecountry) => {
      if (!licensecountry) {
        return res.status(404).json({ message: "License Country Not Found" });
      }
      return res.status(200).json(licensecountry);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Licensecountry.findByPk(req.params.licensecountryId)
    .then((licensecountry) => {
      if (!licensecountry) {
        return res.status(404).json({
          message: "License Country Not Found",
        });
      }
      return licensecountry
        .update({
          namelicense: req.body.namelicense,
        })
        .then(() => res.status(200).json(licensecountry))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Licensecountry.findByPk(req.params.licensecountryId)
    .then((licensecountry) => {
      if (!licensecountry) {
        return res.status(400).send({
          message: "licensecountry Not Found",
        });
      }

      return licensecountry
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
