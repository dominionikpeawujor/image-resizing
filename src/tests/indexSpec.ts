import supertest from 'supertest';
import processing from '../functionalities/resize-processing';
import app from '../index';

const request = supertest(app);
const details = { file: 'img.jpg', width: 250, height: '500' };

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
    expect(processing(details)).toBeDefined();
  });

  it('Tests if the image processing request from server works', async () => {
    const response = await request.get(
      '/api/resize?filename=img.jpg&height=200&width=200'
    );
    expect(response.status).toBe(200);
  });
});
