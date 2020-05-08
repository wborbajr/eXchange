const db = require('../config/db.config.js');
const Login = db.logins;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Login.create({
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		email: req.body.email,
		perfil: req.body.perfil,
		active: req.body.active
	})
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