const db = require('../config/db.config.js');
const Maker = db.makers;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Maker.create(req.body)
		.then(maker => {
			// Send created maker to client
			res.json(maker);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Maker.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(makers => {
			res.json(makers);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	Maker.findByPk(req.params.makerId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(maker => {
			if (!maker) {
				return res.status(404).json({ message: "Maker Not Found" })
			}
			return res.status(200).json(maker)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Maker.findByPk(req.params.makerId)
		.then(
			maker => {
				if (!maker) {
					return res.status(404).json({
						message: 'Maker Not Found',
					});
				}
				return maker.update({
					namemaker: req.body.namemaker
				})
					.then(() => res.status(200).json(maker))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Maker
		.findByPk(req.params.makerId)
		.then(maker => {
			if (!maker) {
				return res.status(400).send({
					message: 'Maker Not Found',
				});
			}

			return maker.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};