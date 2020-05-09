const db = require('../config/db.config.js');
const Coverage = db.coverages;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Coverage.create(req.body)
		.then(coverage => {
			// Send created coverage to client
			res.json(coverage);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Coverage.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(coverages => {
			res.json(coverages);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	Coverage.findByPk(req.params.coverageId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(coverage => {
			if (!coverage) {
				return res.status(404).json({ message: "Coverage Not Found" })
			}
			return res.status(200).json(coverage)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Coverage.findByPk(req.params.coverageId)
		.then(
			coverage => {
				if (!coverage) {
					return res.status(404).json({
						message: 'Coverage Not Found',
					});
				}
				return coverage.update({
					namecoverage: req.body.namecoverage
				})
					.then(() => res.status(200).json(coverage))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Coverage
		.findByPk(req.params.coverageId)
		.then(coverage => {
			if (!coverage) {
				return res.status(400).send({
					message: 'coverage Not Found',
				});
			}

			return coverage.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};