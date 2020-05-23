const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); //Arrange
const CodeBreaker = require('./code-breaker');

/* jest.mock('./code-breaker', () => {
    let cb = new CodeBreaker();
    cb.setSecret('1234');
    return cb;
}) */

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=1234'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('XXXX');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=5678'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=1268'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('XX');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=1568'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('X');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=3412'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('____');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=1243'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('XX__');
    done();
});

test('gets the validate endpoint', async done => {
    const response = await request.get('/validate?secret=2134'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe('XX__');
    done();
});