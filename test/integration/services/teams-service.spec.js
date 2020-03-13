const teamsService = require('../../../src/services/teams-service');

describe('[Integration] - TeamsService', () => {
  describe('store', () => {
    describe('When passing flamengo', () => {
      const result = teamsService.store('flamengo');

      expect(result).toBe(false);
    });
  });

  describe('When passing vasco', () => {
    it('Should return true', () => {
      const result = teamsService.store('vasco');

      expect(result).toBe(true);
    });
  });
});
