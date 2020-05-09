module.exports = function (app) {

    const tests = require('../controller/auth.controller.js');

    // Login - Logout control

    // Login
    app.post('/api/auth/login', tests.login);

    // Logout
    app.get('/api/auth/logout', tests.logout);


}