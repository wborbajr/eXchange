const db = require("../model");

const Chartaccount = db.chartaccounts;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Chartaccount.create(req.body)
    .then((chartaccount) => {
      // Send created chartaccount to client
      res.json(chartaccount);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Chartaccount.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((chartaccounts) => {
      res.json(chartaccounts);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Chartaccount.findByPk(req.params.chartaccountId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((chartaccount) => {
      if (!chartaccount) {
        return res.status(404).json({ message: "Chart Account Not Found" });
      }
      return res.status(200).json(chartaccount);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Chartaccount.findByPk(req.params.chartaccountId)
    .then((chartaccount) => {
      if (!chartaccount) {
        return res.status(404).json({
          message: "chartaccount Not Found",
        });
      }
      return chartaccount
        .update({
          namechartaccount: req.body.namechartaccount,
          io: req.body.io,
        })
        .then(() => res.status(200).json(chartaccount))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Chartaccount.findByPk(req.params.chartaccountId)
    .then((chartaccount) => {
      if (!chartaccount) {
        return res.status(400).send({
          message: "Chart Account Not Found",
        });
      }

      return chartaccount
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
