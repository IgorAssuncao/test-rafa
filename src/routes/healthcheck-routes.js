const { Router } = require('express');

const HealthCheckController = require('../controllers/healthcheck-controller');

const routes = Router();

routes.get('/', HealthCheckController.getHealth);

module.exports = routes;
