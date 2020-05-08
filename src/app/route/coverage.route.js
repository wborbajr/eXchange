module.exports = function (app) {

    const coverages = require('../controller/coverage.controller.js');

    // Create a new 
    app.post('/api/coverages/create', coverages.create);

    // Retrieve all 
    app.get('/api/coverages', coverages.findAll);

    // Retrieve a single by Id
    app.get('/api/coverages/:coverageId', coverages.findByPk);

    // Update a with Id
    app.put('/api/coverages/:coverageId', coverages.update);

    // Delete a with Id
    app.delete('/api/coverages/:coverageId', coverages.delete);
}