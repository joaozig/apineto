const request = require('supertest');
const app = require('../../src/app');

test('should respond with status 200', async () => {
  const response = await request(app).get('/v1/countries');
  expect(response.statusCode).toBe(200);
});

test('response should be an array', async () => {
  const response = await request(app).get('/v1/countries');
  console.log(response.body);
  expect(Array.isArray(response.body)).toBeTruthy();
});

test('response should have 5 items', async () => {
  const response = await request(app).get('/v1/countries');
  expect(response.body.length).toBe(5);
});

test('response should be sorted by confirmed cases', async () => {
  const response = await request(app).get('/v1/countries');
  expect(response.body[0].country).toBe('USA');
  expect(response.body[4].country).toBe('Peru');
});

test('last updated date should be in dd/mm/yyyy format', async () => {
  const response = await request(app).get('/v1/countries');
  const regex = /([0-9]){2}\/([0-9]){2}\/([0-9]){4}/;
  expect(response.body[1].updatedAt.match(regex)).not.toBeNull();
});