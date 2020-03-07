const supertest = require('supertest');

const app = require('../../src/app');

const request = supertest(app);

describe('[Acceptance] - HealthCheck', () => {
  describe('GET /', () => {
    describe('When passing 1 as sum in query', () => {
      let res;

      beforeEach(async () => {
        res = await request.get('/health').query({
          sum: 1,
        });
      });

      it('Should return statusCode 400', () => {
        expect(res.statusCode).toBe(400);
      });
    });

    describe('When passing 2 as sum in query', () => {
      let res;

      beforeEach(async () => {
        res = await request.get('/health').query({
          sum: 2,
        });
      });

      it('Should return statusCode 200', () => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
