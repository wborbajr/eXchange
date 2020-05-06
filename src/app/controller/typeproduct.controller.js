const db = require('../config/db.config.js');
const Typeproduct = db.typeproducts;

// Post
exports.create = (req, res) => {	

	// Save to MariaDB database
	Typeproduct.create({  
			nametypeproduct: req.body.nametypeproduct
		})
		.then(typeproduct => {		
			// Send created typeproduct to client
			res.json(typeproduct);
		})
		.catch(error => res.status(400).send(error))
};
 
// Fetch all 
exports.findAll = (req, res) => {
	Typeproduct.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(typeproducts => {
			res.json(typeproducts);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {  
	Typeproduct.findByPk(req.params.typeproductId,
		{attributes: { exclude: ["createdAt", "updatedAt"] }}
		)
		.then(typeproduct => {
			if (!typeproduct){
				return res.status(404).json({message: "Typeproduct Not Found"})
			}
			return res.status(200).json(typeproduct)
		  }
		)
		.catch(error => res.status(400).send(error));
};

// Update a
exports.update = (req, res) => {
	return Typeproduct.findByPk(req.params.typeproductId)
		.then(
			typeproduct => {
				if(!typeproduct){
					return res.status(404).json({
						message: 'Type Product Not Found',
					});
				}
				return typeproduct.update({
										nametypeproduct: req.body.nametypeproduct
									})
									.then(() => res.status(200).json(typeproduct))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};
 
// Delete by Id
exports.delete = (req, res) => {
	return Typeproduct
		.findByPk(req.params.typeproductId)
		.then(typeproduct => {
			if(!typeproduct) {
				return res.status(400).send({
					message: 'Type Pproduct Not Found',
				});
			}

			return typeproduct.destroy()
				.then(() => res.status(200).json({message: "Destroy successfully!"}))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};