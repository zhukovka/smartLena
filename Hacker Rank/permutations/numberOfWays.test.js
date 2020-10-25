const assert = require('assert');
/*

 */

describe('numberOfWaysToMakeChange Tests', () => {
    const numberOfWaysToMakeChange = require('./numberOfWays');
    it('should return 2 (1x1 + 1x5 and 6x1) for 6, [1, 5]', () => {
        const n = numberOfWaysToMakeChange(6, [1, 5]);
        assert.strictEqual(n, 2)
    });
    it('should return 4 (1*1 + 1*5, 6*1, 2*3, 1*4 + 2*1) for 6, [1, 2, 5]', () => {
        const n = numberOfWaysToMakeChange(6, [1, 2, 5]);
        assert.strictEqual(n, 4)
    });
    it('should return 4 (6*1, 2*3, 3*2, 1*4 + 2*1, 1*2 + 2*2, 1*3 + 3*1, 3*1 + 2*1 + 1*1) for 6, [1, 2, 3]', () => {
        const n = numberOfWaysToMakeChange(6, [1, 2, 5]);
        assert.strictEqual(n, 4)
    });
    it('should return 2 (1x2 + 1x4 and 6x1) for 6, [1, 4]', () => {
        const n = numberOfWaysToMakeChange(6, [1, 4]);
        assert.strictEqual(n, 2)
    });
});
