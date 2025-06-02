const routes = require('express').Router();

routes.post('/login', require('../controller/LoginController'));

module.exports = routes;