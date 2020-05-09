module.exports = function (app) {

    const wiredetails = require('../controller/wiredetail.controller.js');

    // Create a new 
    app.post('/api/wiredetails/create', wiredetails.create);

    // Retrieve all 
    app.get('/api/wiredetails', wiredetails.findAll);

    // Retrieve a single by Id
    app.get('/api/wiredetails/:wiredetailId', wiredetails.findByPk);

    // Update a with Id
    app.put('/api/wiredetails/:wiredetailId', wiredetails.update);

    // Delete a with Id
    app.delete('/api/wiredetails/:wiredetailId', wiredetails.delete);
}