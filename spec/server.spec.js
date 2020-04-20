const path = require('path');
const expect = require('chai').expect;
const server = require('../server/index');

describe('server stuff', () => {
  test('server exists', () => {
    expect(server.app).exists();
    done();
  });
  test('server app is a function', () => {
    expect(server.app).to.be.a.('function');
    done();
  })
});