const teamsService = require('../services/teams-service');

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    if (teamsService.store(name) === false) {
      return res.status(400).json({
        msg: false,
      });
    }
    return res.json({
      msg: true,
    });
  },
};
