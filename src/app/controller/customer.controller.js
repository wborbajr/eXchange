const db = require('../config/db.config.js');
const Customer = db.customers;

// Post 
exports.create = (req, res) => {

	// console.log(req.body);
	console.log(`Customer: ${Customer}`)

	// Save to MariaDB database
	Customer.create({
		name: req.body.name,
		andress: req.body.andress,
		phone: req.body.phone,
		phone2: req.body.phone2,
		zipcode: req.body.zipcode,
		city: req.body.city,
		state: req.body.state,
		email: req.body.email,
		dtbirth: req.body.dtbirth,
		numidentification: req.body.numidentification,
		comissionpercent: req.body.comissionpercent,
		attention: req.body.attention,
		picture_path: req.body.picture_path,
		active: req.body.active,
		restriction: req.body.restriction
	})
		.then(customer => {
			// Send created customer to client
			res.json(customer);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Customer.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(customers => {
			res.json(customers);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {

	console.log(`Customer: ${Customer}`)

	Customer.findByPk(req.params.customerId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(customer => {
			if (!customer) {
				return res.status(404).json({ message: "Customer Not Found" })
			}
			return res.status(200).json(customer)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update by Id
exports.update = (req, res) => {
	return Customer.findByPk(req.params.customerId)
		.then(
			customer => {
				if (!customer) {
					return res.status(404).json({
						message: 'Customer Not Found',
					});
				}
				return customer.update({
					name: req.body.name,
					andress: req.body.andress,
					phone: req.body.phone,
					phone2: req.body.phone2,
					zipcode: req.body.zipcode,
					city: req.body.city,
					state: req.body.state,
					email: req.body.email,
					dtbirth: req.body.dtbirth,
					numidentification: req.body.numidentification,
					comissionpercent: req.body.comissionpercent,
					attention: req.body.attention,
					picture_path: req.body.picture_path,
					active: req.body.active,
					restriction: req.body.restriction
				})
					.then(() => res.status(200).json(customer))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete a by Id
exports.delete = (req, res) => {
	return Customer
		.findByPk(req.params.customerId)
		.then(customer => {
			if (!customer) {
				return res.status(400).send({
					message: 'Customer Not Found',
				});
			}

			return customer.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};