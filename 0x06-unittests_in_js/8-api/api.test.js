const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the app from api.js

describe('Index page', () => {
  // Test for the status code and message on the home page
  it('should return the correct status code and result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Correct status code
      expect(body).to.equal('Welcome to the payment system'); // Correct result
      done();
    });
  });

  // Additional tests can go here
});
