module.exports = function(app) {
 
    const cashflows = require('../controller/cashflow.controller.js');
 
    // Create a new 
    app.post('/api/cashflows/create', cashflows.create);
 
    // Retrieve all 
    app.get('/api/cashflows', cashflows.findAll);
 
    // Retrieve a single by Id
    app.get('/api/cashflows/:cashflowId', cashflows.findByPk);
 
    // Update a with Id
    app.put('/api/cashflows/:cashflowId', cashflows.update);
 
    // Delete a with Id
    app.delete('/api/cashflows/:cashflowId', cashflows.delete);
}