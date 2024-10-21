// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        spy.restore(); // Restore the original function
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });
});
