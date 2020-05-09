const bcrypt = require('bcryptjs')

const db = require('../config/db.config.js');
const Test = db.tests;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Test.create(
		req.body
	)
		.then(test => {
			// Send created test to client
			res.json(test);
		})
		.catch(error => res.status(400).send(error))

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


// Validate Login - v1
exports.loginv1 = (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	Test.findOne({
		where: {
			username: username,
			password: password
		}
	})
		.then(tests => {
			res.json(tests);
		})
		.catch(error => res.status(400).send(error))
};

// Validate Login - v2
exports.loginv2 = (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	Test.findOne({
		where: {
			username: username
		}
	}).then(function (username) {
		if (!username) {
			return res.status(400).send({
				message: 'Username or Password Not Found',
			});
		} else {
			return res.status(200).send({
				message: 'Logged in',
			});
		}
	});
};

// Validate Login - v3
// exports.loginv3 = (req, res) => {

// 	Test.findOne({
// 		where: {
// 			username: req.body.username
// 		}
// 	}).then(function (username) {
// 		if (!username) {
// 			return res.status(400).send({
// 				message: 'Username or Password Not Found',
// 			});
// 		} else {
// 			bcrypt.compareSync(req.body.password, tests.password, function (err, result) {
// 				if (result == true) {
// 					return res.status(200).send({
// 						message: 'Logged in',
// 					});

// 				} else {
// 					return res.status(400).send({
// 						message: 'Fuck you baby',
// 					});

// 				}
// 			}); //bcrypt

// 		}
// 	});

// };

exports.loginv3 = (req, res) => {

	console.log("Sign-In");

	Test.findOne({
		where: {
			username: req.body.username
		}
	}).then(result => {
		if (!result) {
			return res.status(404).send({ message: 'User Not Found.' });
		}
		console.log(`PWD DO BANCO ${result.password}`);
		console.log(`PWD DO PSTMA ${req.body.password}`);

		const passwordIsValid = bcrypt.compare(req.body.password, result.password);

		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}

		const token = "1234";
		res.status(200).send({ auth: true, accessToken: token });

	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});

};
