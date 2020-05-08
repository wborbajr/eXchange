module.exports = function (app) {

    const makers = require('../controller/maker.controller.js');

    // Create a new 
    app.post('/api/makers/create', makers.create);

    // Retrieve all 
    app.get('/api/makers', makers.findAll);

    // Retrieve a single by Id
    app.get('/api/makers/:makerId', makers.findByPk);

    // Update a with Id
    app.put('/api/makers/:makerId', makers.update);

    // Delete a with Id
    app.delete('/api/makers/:makerId', makers.delete);
}