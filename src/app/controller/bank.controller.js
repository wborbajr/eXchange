const db = require('../config/db.config.js');
const Bank = db.banks;

// Post a Bank
exports.create = (req, res) => {	

	// Save to MariaDB database
	Bank.create({  
			namebank: req.body.namebank,
			agency: req.body.agency,
			count: req.body.count
		})
		.then(bank => {		
			// Send created bank to client
			res.json(bank);
		})
		.catch(error => res.status(400).send(error))
};
 
// Fetch all Banks
exports.findAll = (req, res) => {
	Bank.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(banks => {
			res.json(banks);
		})
		.catch(error => res.status(400).send(error))
};

// Find a Bank by Id
exports.findByPk = (req, res) => {  
	Bank.findByPk(req.params.bankId,
		{attributes: { exclude: ["createdAt", "updatedAt"] }}
		)
		.then(bank => {
			if (!bank){
				return res.status(404).json({message: "Bank Not Found"})
			}
			return res.status(200).json(bank)
		  }
		)
		.catch(error => res.status(400).send(error));
};

// Update a Bank
exports.update = (req, res) => {
	return Bank.findByPk(req.params.bankId)
		.then(
			bank => {
				if(!bank){
					return res.status(404).json({
						message: 'Bank Not Found',
					});
				}
				return bank.update({
										namebank: req.body.namebank,
										agency: req.body.agency,
										count: req.body.count
									})
									.then(() => res.status(200).json(bank))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};
 
// Delete a Bank by Id
exports.delete = (req, res) => {
	return Bank
		.findByPk(req.params.bankId)
		.then(bank => {
			if(!bank) {
				return res.status(400).send({
					message: 'Bank Not Found',
				});
			}

			return bank.destroy()
				.then(() => res.status(200).json({message: "Destroy successfully!"}))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};