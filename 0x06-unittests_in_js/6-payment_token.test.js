const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.include({ data: 'Successful response from the API' });
            done();  // Call done to signal Mocha that the test is complete
        }).catch((err) => done(err));  // Handle any potential errors
    });
});
