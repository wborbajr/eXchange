module.exports = function (app) {

    const tests = require('../controller/test.controller.js');

    // Create a new 
    app.post('/api/tests/create', tests.create);

    // Retrieve all 
    app.get('/api/tests', tests.findAll);

    // Retrieve a single by Id
    app.get('/api/tests/:testId', tests.findByPk);

    // Update a with Id
    app.put('/api/tests/:testId', tests.update);

    // Delete a with Id
    app.delete('/api/tests/:testId', tests.delete);
}