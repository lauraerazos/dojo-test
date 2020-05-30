const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); //Arrange

jest.mock('./secret-gen', () => {
  return () => '1234';
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=1234'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('XXXX');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=5678'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=1268'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('XX');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=1568'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('X');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=3412'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('____');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=1243'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('XX__');
  done();
});

test('gets the validate endpoint', async (done) => {
  const response = await request.get('/validate?secret=2134'); //Act
  expect(response.status).toBe(200);
  expect(response.type).toBe('application/json');
  expect(response.body.result).toBe('XX__');
  done();
});
