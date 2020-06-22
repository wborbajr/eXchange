const db = require("../config/db.config.js");
const City = db.cities;

// Post
exports.create = (req, res) => {
  // Save to MariaDB database
  City.create(req.body)
    .then((city) => {
      // Send created city to client
      res.json(city);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  City.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((cities) => {
      res.json(cities);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  City.findByPk(req.params.cityId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((city) => {
      if (!city) {
        return res.status(404).json({ message: "City Not Found" });
      }
      return res.status(200).json(city);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return City.findByPk(req.params.cityId)
    .then((city) => {
      if (!city) {
        return res.status(404).json({
          message: "City Not Found",
        });
      }
      return city
        .update({
          name_city: req.body.name_city,
        })
        .then(() => res.status(200).json(city))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return City.findByPk(req.params.cityId)
    .then((city) => {
      if (!city) {
        return res.status(400).send({
          message: "City Not Found",
        });
      }

      return city
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
