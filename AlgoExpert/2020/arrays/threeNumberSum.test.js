const assert = require('assert');
const threeNumberSum = require('./threeNumberSum');
describe('threeNumberSum Tests', () => {
    it('should return', () => {
        const actual = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
        const expected = [
            [-8, 2, 6],
            [-8, 3, 5],
            [-6, 1, 5],
        ];
        assert.deepStrictEqual(actual, expected)
    });
});
