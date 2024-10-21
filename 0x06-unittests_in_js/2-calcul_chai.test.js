const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are 0.1 and -0.3', () => {
      expect(calculateNumber('SUM', 0.1, -0.3)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2 when inputs are 2.5 and 1.4', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 1.4)).to.equal(2);
    });

    it('should return 0 when inputs are 0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 1.5 when inputs are 2.5 and 1.5', () => {
      expect(calculateNumber('DIVIDE', 2.5, 1.5)).to.equal(1.5);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
    });
  });
});
