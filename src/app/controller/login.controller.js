const db = require('../config/db.config.js');
const Login = db.logins;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Login.create(req.body)
		.then(login => {
			// Send created login to client
			res.json(login);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Login.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(logins => {
			res.json(logins);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	Login.findByPk(req.params.loginId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(login => {
			if (!login) {
				return res.status(404).json({ message: "Login Not Found" })
			}
			return res.status(200).json(login)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Login.findByPk(req.params.loginId)
		.then(
			login => {
				if (!login) {
					return res.status(404).json({
						message: 'Login Not Found',
					});
				}
				return login.update({
					username: req.body.username,
					password: req.body.password,
					name: req.body.name,
					email: req.body.email,
					perfil: req.body.perfil,
					active: req.body.active
				})
					.then(() => res.status(200).json(login))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Login
		.findByPk(req.params.loginId)
		.then(login => {
			if (!login) {
				return res.status(400).send({
					message: 'Login Not Found',
				});
			}

			return login.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};

// Validate signin
exports.signin = (req, res) => {

	console.log("Sign-In");

	Test.findOne({
		where: {
			username: req.body.username
		}
	}).then(result => {
		if (!result) {
			return res.status(404).send({ message: 'User Not Found.' });
		}

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
