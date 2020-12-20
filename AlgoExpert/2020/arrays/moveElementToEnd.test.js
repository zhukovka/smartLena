const moveElementToEnd = require('./moveElementToEnd');
const assert = require('assert');
describe('moveElementToEnd Tests', () => {
    it('should ', () => {
        const array = [2, 1, 2, 2, 2, 3, 4, 2];
        const toMove = 2;
        const expected = [1, 3, 4, 2, 2, 2, 2, 2];
        const actual = moveElementToEnd(array, toMove);
        assert.deepStrictEqual(actual, expected);
    });
});
