module.exports = function (app) {

    const parameters = require('../controller/parameter.controller.js');

    // Create a new 
    app.post('/api/parameters/create', parameters.create);

    // Retrieve all 
    app.get('/api/parameters', parameters.findAll);

    // Retrieve a single by Id
    app.get('/api/parameters/:parameterId', parameters.findByPk);

    // Update a with Id
    app.put('/api/parameters/:parameterId', parameters.update);

    // Delete a with Id
    app.delete('/api/parameters/:parameterId', parameters.delete);
}