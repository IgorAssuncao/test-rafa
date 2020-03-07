const HealthCheckService = require('../services/healthcheck-service');

module.exports = {
  getHealth(req, res) {
    const { sum } = req.query;

    if (!HealthCheckService.getHealth(sum)) {
      return res.status(400).json({
        msg: false,
      });
    }

    return res.json({
      msg: true,
    });
  },
};
