const db = require('../config/db.config.js');
const Parameter = db.parameters;

// Post 
exports.create = (req, res) => {

	// Save to MariaDB database
	Parameter.create(req.body)
		.then(parameter => {
			// Send created parameter to client
			res.json(parameter);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Parameter.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(parameters => {
			res.json(parameters);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	PArameter.findByPk(req.params.parameterId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(parameter => {
			if (!parameter) {
				return res.status(404).json({ message: "Bank Not Found" })
			}
			return res.status(200).json(parameter)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Parameter.findByPk(req.params.parameterId)
		.then(
			parameter => {
				if (!parameter) {
					return res.status(404).json({
						message: 'Bank Not Found',
					});
				}
				return parameter.update({
					client: req.body.client,
					exchange_vl_month: req.body.exchange_vl_month,
					exchange_vl_year: req.body.exchange_vl_year,
					exchange_vl_wire: req.body.exchange_vl_wire,
					exchange_comission: req.body.exchange_comission
				})
					.then(() => res.status(200).json(parameter))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Parameter
		.findByPk(req.params.parameterId)
		.then(parameter => {
			if (!parameter) {
				return res.status(400).send({
					message: 'Bank Not Found',
				});
			}

			return parameter.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};