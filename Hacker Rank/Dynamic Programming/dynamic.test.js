const assert = require('assert');

describe('Dynamic programming', () => {
    describe('Get ways', () => {
        const getWays = require('./getWays');
        it('should return 4', () => {
            const ways = getWays(4, [1, 2, 3]);
            assert.deepStrictEqual(ways, 4);
        });
        
        it('should return 1', () => {
            const ways = getWays(1, [1, 2]);
            assert.deepStrictEqual(ways, 1);
        });
        it('should return 2 for 2, [1,2]', () => {
            const ways = getWays(2, [1, 2]);
            assert.deepStrictEqual(ways, 2);
        });
        it('should return 2 for 3, [1,2]', () => {
            const ways = getWays(3, [1, 2]);
            assert.deepStrictEqual(ways, 2);
        });
    });
});
