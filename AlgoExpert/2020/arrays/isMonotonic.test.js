const assert = require('assert');
const isMonotonic = require('./isMonotonic')
describe('isMonotonic Tests', () => {
    it('should be monotonic', () => {
        const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
        const expected = true;
        const actual = isMonotonic(array);
        assert.deepStrictEqual(actual, expected);
    });
    
    it('should be monotonic for an empty array', () => {
        const array = [];
        const expected = true;
        const actual = isMonotonic(array);
        assert.deepStrictEqual(actual, expected);
    });
    
    it('should NOT be monotonic', () => {
        const array = [-10, -1100, -900, -1101, -1102, -9001];
        const expected = false;
        const actual = isMonotonic(array);
        assert.deepStrictEqual(actual, expected);
    });
    
    it('should NOT be monotonic [1, 2, 0]', () => {
        const array = [1, 2, 0];
        const expected = false;
        const actual = isMonotonic(array);
        assert.deepStrictEqual(actual, expected);
    });
    
    it('should be monotonic [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]', () => {
        const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];
        const expected = true;
        const actual = isMonotonic(array);
        assert.deepStrictEqual(actual, expected);
    });
});
