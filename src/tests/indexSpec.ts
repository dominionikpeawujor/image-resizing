import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('The First Test', () => {
  it('Tests if the root endpoint works ', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Tests if the api endpoint works ', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('The Second Test', () => {
  it('Tests if the image processing works', async () => {
    const response = await request.get(
      '/api/resize?filename=img.jpg&height=200&width=200'
    );
    expect(response.status).toBe(200);
  });
});
