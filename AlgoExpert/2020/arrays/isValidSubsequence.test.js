const assert = require('assert');
const isValidSubsequence = require('./isValidSubsequence')
describe('isValidSubsequence Tests', () => {
    it('should be valid', () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10];
        const sequence = [1, 6, -1, 10];
        assert.deepStrictEqual(isValidSubsequence(array, sequence), true)
    });
});
