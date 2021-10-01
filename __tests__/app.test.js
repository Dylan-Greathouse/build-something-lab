import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should post a quote to db', () => {
    return request(app)
      .post('/api/v1/quotes')
      .send({ quote:
        'No home is complete without a proper toolbox. Here\'s April and Andy\'s: A hammer, a half eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog, a scissor half, a flashlight filled with jellybeans.'
      })
      .then((res) => {
        expect(res.body).toEqual({
          quote: expect.any(String),
        });
      });
  });

  it('should get quote in db', () => {
    return request(app)
      .get('/api/v1/quotes')
      .then((res) => {
        expect(res.body).toEqual([{
          quote: expect.any(String)
        }]);
      });
  });

  it('show quotes depending on the id', () => {
    return request(app)
      .get('/api/v1/quotes/1')
      .then((res) => {
        console.log('num', res.body);
        // expect(createMessage).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual({
          quote: expect.any(String)
          
        });
      });
  });

  it('should update a quote to another one', () => {
    return request(app)
      .patch('/api/v1/quotes/1')
      .send({ quote: 'First rule. No conversation lasts longer than 100 total words.' })
      .then((res) => {
        expect(res.body).toEqual({
          quote: expect.any(String)
        });
      });
  });

  it('Should delete ron Quote', () => {
    return request(app)
      .delete('/api/v1/quotes/1')
      .send({})
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
