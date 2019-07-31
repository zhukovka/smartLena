const assert = require('assert');
describe('Synchronous Shopping', () => {
    const shop = require('./synchronous-shopping');
    it('should return 30', () => {
        let centers = ['1 1', '1 2', '1 3', '1 4', '1 5'];
        let roads = [[1, 2, 10], [1, 3, 10], [2, 4, 10], [3, 5, 10], [4, 5, 10]];
        const t = shop(5, 5, centers, roads);
        assert.deepStrictEqual(t, 30);
    });
});
