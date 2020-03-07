const supertest = require('supertest');

const app = require('../../src/app');

const request = supertest(app);

describe('[Acceptance] - TeamsController', () => {
  describe('GET /', () => {
    let res;

    beforeEach(async () => {
      res = await request.get('/teams');
    });

    expect(res.body.meta).toHaveProperty('count');
    expect(res.body.meta).toHaveProperty('limit');
    expect(res.body.meta).toHaveProperty('offset');
  });

  describe('POST /', () => {
    describe('When sending only team name');
    describe('When sending only number of players');
    describe('When sending nothing');
    describe('When sending both');
  });
});
