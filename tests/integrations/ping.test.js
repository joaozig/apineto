const request = require('supertest');
const app = require('../../src/app');

test('should respond with 200', async () => {
  const response = await request(app).get('/ping');
  expect(response.statusCode).toBe(200);
});