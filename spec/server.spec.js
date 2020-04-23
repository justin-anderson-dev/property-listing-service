/**
 * @jest-environment node
 */

const app = require('../server/index');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
import 'regenerator-runtime';

describe('Server Tests', () => {
  it('Gets the test endpoint', async (done) => {
    const response = await request.get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
  });
  it('Gets the listings endpoint', async (done) => {
    const response = await request.get('/listings/1001');

    expect(response.status).toBe(200);
    expect(response.body.listingId).toBe(1001);
    done();
  });

  afterAll( async () => {
    await mongoose.connection.close();
  });

});


