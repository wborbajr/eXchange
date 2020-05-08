module.exports = function (app) {

    const typeproducts = require('../controller/typeproduct.controller.js');

    // Create a new 
    app.post('/api/typeproducts/create', typeproducts.create);

    // Retrieve all 
    app.get('/api/typeproducts', typeproducts.findAll);

    // Retrieve a single by Id
    app.get('/api/typeproducts/:typeproductId', typeproducts.findByPk);

    // Update a with Id
    app.put('/api/typeproducts/:typeproductId', typeproducts.update);

    // Delete a with Id
    app.delete('/api/typeproducts/:typeproductId', typeproducts.delete);
}