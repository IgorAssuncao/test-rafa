const { Router } = require('express');

const HealthCheckRoutes = require('./healthcheck-routes');
const TeamsRoutes = require('./teams-routes');

const routes = Router();

routes.use('/health', HealthCheckRoutes);
routes.use('/teams', TeamsRoutes);

module.exports = routes;
