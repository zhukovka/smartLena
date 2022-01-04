const gcd = require('./gcd');
const assert = require('assert');

describe('GCD', function () {
    it('should return 1 (Example 1)', function () {
        const actual = gcd(18, 35);
        assert.deepStrictEqual(actual, 1);
    });

    it('should return 17657 (Example 2)', function () {
        const actual = gcd(28851538, 1183019);
        assert.deepStrictEqual(actual, 17657);
    });
});