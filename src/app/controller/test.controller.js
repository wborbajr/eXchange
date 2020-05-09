const db = require('../config/db.config.js');
const Test = db.tests;

// Post a 
exports.create = (req, res) => {

	// console.log(`Request ==> ${req}`);
	// console.log(JSON.parse(req.body.tostring));
	// console.log(`Customer: ${Customer}`)

	// Save to MariaDB database
	Test.create(req.body)
		.then(test => {
			// Send created test to client
			res.json(test);
		})
		.catch(error => res.status(400).send(error))

	// Test.create({
	// 	username: req.body.username,
	// 	password: req.body.password
	// })
	// 	.then(test => {
	// 		// Send created test to client
	// 		res.json(test);
	// 	})
	// 	.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Test.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(tests => {
			res.json(tests);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	Test.findByPk(req.params.testId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(test => {
			if (!test) {
				return res.status(404).json({ message: "Test Not Found" })
			}
			return res.status(200).json(test)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Test.findByPk(req.params.testId)
		.then(
			test => {
				if (!test) {
					return res.status(404).json({
						message: 'Test Not Found',
					});
				}
				return test.update({
					test: req.body.test
				})
					.then(() => res.status(200).json(test))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Test
		.findByPk(req.params.testId)
		.then(test => {
			if (!test) {
				return res.status(400).send({
					message: 'Test Not Found',
				});
			}

			return test.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};