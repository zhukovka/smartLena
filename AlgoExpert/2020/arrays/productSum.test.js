const assert = require('assert');
const productSum = require('./productSum');
describe('productSum Tests', () => {
    it('should return 12', () => {
        const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
        const actual = productSum(test);
        assert.deepStrictEqual(actual, 12);
    });
});
