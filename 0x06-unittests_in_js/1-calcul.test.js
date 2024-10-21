const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when inputs are 1.4 and 2.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
    });

    it('should return 0 when inputs are 0.1 and -0.3', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, -0.3), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2 when inputs are 2.5 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.4), 2);
    });

    it('should return 0 when inputs are 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 1.5 when inputs are 2.5 and 1.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 1.5), 1.5);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 0), 'Error');
    });
  });
});
