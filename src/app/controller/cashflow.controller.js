const db = require("../config/db.config.js");
const Cashflow = db.cashflows;

// Post a
exports.create = (req, res) => {
  // Save to MariaDB database
  Cashflow.create(req.body)
    .then((cashflow) => {
      // Send created cashflow to client
      res.json(cashflow);
    })
    .catch((error) => res.status(400).send(error));
};

// Fetch all
exports.findAll = (req, res) => {
  Cashflow.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((casflows) => {
      res.json(casflows);
    })
    .catch((error) => res.status(400).send(error));
};

// Find by Id
exports.findByPk = (req, res) => {
  Cashflow.findByPk(req.params.cashflowId, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((cashflow) => {
      if (!cashflow) {
        return res.status(404).json({ message: "cashflow Not Found" });
      }
      return res.status(200).json(cashflow);
    })
    .catch((error) => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
  return Cashflow.findByPk(req.params.cashflowId)
    .then((cashflow) => {
      if (!cashflow) {
        return res.status(404).json({
          message: "cashflow Not Found",
        });
      }
      return cashflow
        .update({
          customer_phone: req.body.customer_phone,
          dtcashflow: req.body.dtcashflow,
          tchaflow: req.body.tchaflow,
          amountflow: req.body.amountflow,
          valueflow: req.body.valueflow,
          centsflow: req.body.centsflow,
          cents2flow: req.body.cents2flow,
          check_number: req.body.check_number,
          percentflow: req.body.percentflow,
          valuepercentflow: req.body.valuepercentflow,
          airpercentflow: req.body.airpercentflow,
          aircomisvalue: req.body.aircomisvalue,
          airreservation: req.body.airreservation,
          airdtemiuntil: req.body.airdtemiuntil,
          totalflow: req.body.totalflow,
          movetype: req.body.movetype,
          totaltopay: req.body.totaltopay,
          cashflowok: req.body.cashflowok,
          cashflowobs: req.body.cashflowobs,
          cashfloworigin: req.body.cashfloworigin,
          wire: req.body.wire,
          subtotalflow: req.body.subtotalflow,
          idlogin: req.body.idlogin,
          vin: req.body.vin,
          year: req.body.year,
          model: req.body.model,
          description: req.body.description,
        })
        .then(() => res.status(200).json(cashflow))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
  return Cashflow.findByPk(req.params.cashflowId)
    .then((cashflow) => {
      if (!cashflow) {
        return res.status(400).send({
          message: "cashflow Not Found",
        });
      }

      return cashflow
        .destroy()
        .then(() => res.status(200).json({ message: "Destroy successfully!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
