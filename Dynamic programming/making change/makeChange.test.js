const assert = require('assert');
describe('Make change tests', () => {
    it('should calculate way to make change recursively', () => {
        const makeChange = require('./makeChange');
        const ways = makeChange(4, [2, 1]);
        assert.deepStrictEqual(ways, 0)
    });
});
