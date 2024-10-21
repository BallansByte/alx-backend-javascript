const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    // Stubbing Utils.calculateNumber to return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    sinon.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    // Assert that the stub was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
