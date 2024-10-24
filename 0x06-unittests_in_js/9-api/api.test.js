const request = require('supertest');
const app = require('./api');  // Assuming your api.js exports the app

describe('GET /cart/:id', () => {
    it('should return correct message for valid cart id', (done) => {
        request(app)
            .get('/cart/12')
            .expect(200)
            .expect('Payment methods for cart 12', done);
    });

    it('should return 404 for invalid cart id (non-numeric)', (done) => {
        request(app)
            .get('/cart/hello')
            .expect(404, done);
    });
});
