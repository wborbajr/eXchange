module.exports = function(app) {
 
    const cities = require('../controller/city.controller.js');
 
    // Create a new City
    app.post('/api/cities/create', cities.create);
 
    // Retrieve all City
    app.get('/api/cities', cities.findAll);
 
    // Retrieve a single City by Id
    app.get('/api/cities/:cityId', cities.findByPk);
 
    // Update a City with Id
    app.put('/api/cities/:cityId', cities.update);
 
    // Delete a City with Id
    app.delete('/api/cities/:cityId', cities.delete);
}