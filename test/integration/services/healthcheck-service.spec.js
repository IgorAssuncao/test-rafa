const HealthCheckService = require('../../../src/services/healthcheck-service');

describe('[Integration] - HealthCheckService', () => {
  describe('getHealth', () => {
    describe('When passing 1', () => {
      it('Should return false', () => {
        const result = HealthCheckService.getHealth(1);

        expect(result).toBe(false);
      });
    });

    describe('When passing 2', () => {
      it('Should return true', () => {
        const result = HealthCheckService.getHealth(2);

        expect(result).toBe(true);
      });
    });
  });
});
