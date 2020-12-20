const findThreeLargestNumbers = require('./findThreeLargestNumbers');
const assert = require('assert');
describe('findThreeLargestNumbers Tests', () => {
    it('should return [18, 141, 541]', () => {
        const expected = [18, 141, 541];
        const actual = findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
        assert.deepStrictEqual(actual, expected)
    });
    
    it('should return [-2, -1, 7]', () => {
        const expected = [-2, -1, 7];
        const actual = findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])
        assert.deepStrictEqual(actual, expected)
    });
});
