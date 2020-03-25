const supertest = require('supertest');

const app = require('../../src/app');

const request = supertest(app);

describe('[Acceptance] - TeamsController', () => {
  describe('POST /', () => {
    describe('When passing a team that already exists in array', () => {
      let res;

      beforeEach(async () => {
        res = await request.post('/teams', {
          name: 'flamengo',
        });
      });

      it('Should return statusCode 400', () => {
        expect(res.statusCode).toBe(400);
      });

      it('Should return body msg false', () => {
        expect(res.body.msg).toBe(false);
      });
    });

    describe('When passing a team that does not exists in array', () => {
      let res;

      beforeEach(async () => {
        res = await request.post('/teams', {
          name: 'vasco',
        });
      });

      it('Should return statusCode 200', () => {
        expect(res.statusCode).toBe(200);
      });

      it('Should return body msg true', () => {
        expect(res.body.msg).toBe(true);
      });
    });

    // expect(res.body.meta).toHaveProperty('count');
    // expect(res.body.meta).toHaveProperty('limit');
    // expect(res.body.meta).toHaveProperty('offset');
  });

  // describe('POST /', () => {
  //   describe('When sending only team name');
  //   describe('When sending only number of players');
  //   describe('When sending nothing');
  //   describe('When sending both');
  // });
});
