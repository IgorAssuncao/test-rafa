const { Router } = require('express');

const TeamsController = require('../controllers/teams-controller');

const routes = Router();

routes.get('/', TeamsController.getAll);
routes.post('/', TeamsController.create);

module.exports = routes;
