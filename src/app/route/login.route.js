module.exports = function (app) {

    const logins = require('../controller/login.controller.js');

    // Create a new 
    app.post('/api/logins/create', logins.create);

    // Retrieve all 
    app.get('/api/logins', logins.findAll);

    // Retrieve a single by Id
    app.get('/api/logins/:loginId', logins.findByPk);

    // Update a with Id
    app.put('/api/logins/:loginId', logins.update);

    // Delete a with Id
    app.delete('/api/logins/:loginId', logins.delete);

    // Create a new 
    app.post('/api/logins/signin', logins.signin);

}