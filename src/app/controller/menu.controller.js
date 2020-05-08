const db = require('../config/db.config.js');
const Menu = db.menus;

// Post a 
exports.create = (req, res) => {

	// Save to MariaDB database
	Menu.create({
		menu: req.body.menu,
		menu_description: req.body.menu_description,
		path: req.body.path,
		sub_menu: req.body.sub_menu,
		seq: req.body.seq

	})
		.then(menu => {
			// Send created menu to client
			res.json(menu);
		})
		.catch(error => res.status(400).send(error))
};

// Fetch all 
exports.findAll = (req, res) => {
	Menu.findAll({
		attributes: { exclude: ["createdAt", "updatedAt"] }
	})
		.then(menus => {
			res.json(menus);
		})
		.catch(error => res.status(400).send(error))
};

// Find by Id
exports.findByPk = (req, res) => {
	Menu.findByPk(req.params.menuId,
		{ attributes: { exclude: ["createdAt", "updatedAt"] } }
	)
		.then(menu => {
			if (!menu) {
				return res.status(404).json({ message: "menu Not Found" })
			}
			return res.status(200).json(menu)
		}
		)
		.catch(error => res.status(400).send(error));
};

// Update
exports.update = (req, res) => {
	return Menu.findByPk(req.params.menuId)
		.then(
			menu => {
				if (!menu) {
					return res.status(404).json({
						message: 'menu Not Found',
					});
				}
				return menu.update({
					menu: req.body.menu,
					menu_description: req.body.menu_description,
					path: req.body.path,
					sub_menu: req.body.sub_menu,
					seq: req.body.seq
				})
					.then(() => res.status(200).json(menu))
					.catch((error) => res.status(400).send(error));
			}
		)
		.catch((error) => res.status(400).send(error));
};

// Delete by Id
exports.delete = (req, res) => {
	return Menu
		.findByPk(req.params.menuId)
		.then(menu => {
			if (!menu) {
				return res.status(400).send({
					message: 'menu Not Found',
				});
			}

			return menu.destroy()
				.then(() => res.status(200).json({ message: "Destroy successfully!" }))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
};