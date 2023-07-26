```javascript
const request = require('supertest');
const app = require('../server');

describe('Weather API', () => {
  it('should return weather data for a specific location', async () => {
    const res = await request(app)
      .get('/api/weather')
      .query({ location: 'London' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('location');
    expect(res.body).toHaveProperty('temperature');
    expect(res.body).toHaveProperty('humidity');
  });

  it('should return an error if no location is provided', async () => {
    const res = await request(app)
      .get('/api/weather')
      .query({ location: '' });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});
```