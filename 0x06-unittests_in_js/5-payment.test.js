const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    // This hook runs before each test
    beforeEach(() => {
        // Spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    // This hook runs after each test
    afterEach(() => {
        // Restore console.log after each test
        consoleSpy.restore();
    });

    it('should log the correct total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify the console.log output
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        // Ensure console.log is called once
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        // Verify the console.log output
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        // Ensure console.log is called once
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
