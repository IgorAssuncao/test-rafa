const { Router } = require('express');

const TeamsController = require('../controllers/teams-controller');

const routes = Router();

routes.post('/', TeamsController.store);

module.exports = routes;
