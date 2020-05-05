module.exports = function(app) {
 
    const banks = require('../controller/bank.controller.js');
 
    // Create a new Bank
    app.post('/api/banks/create', banks.create);
 
    // Retrieve all Bank
    app.get('/api/banks', banks.findAll);
 
    // Retrieve a single Bank by Id
    app.get('/api/banks/:bankId', banks.findByPk);
 
    // Update a Bank with Id
    app.put('/api/banks/:bankId', banks.update);
 
    // Delete a Bank with Id
    app.delete('/api/banks/:bankId', banks.delete);
}