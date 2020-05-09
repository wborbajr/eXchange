module.exports = function (app) {

    const tests = require('../controller/auth.controller.js');
    // Login
    app.post('/api/auth/login', tests.login);

    // Logout
    app.get('/api/auth/logout', tests.logout);


}