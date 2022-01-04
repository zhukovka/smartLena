/**
 * 1979. Find Greatest Common Divisor of Array
 * (https://leetcode.com/problems/find-greatest-common-divisor-of-array/)
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        if (a === 0) {
            return b;
        }
        return gcd(b, a % b);
    }

    return gcd(max, min);
};

const assert = require('assert');
describe('Find Greatest Common Divisor of Array', function () {
    let nums, actual;
    it('Example 1', function () {
        nums = [2, 5, 6, 9, 10]
        actual = findGCD(nums);
        assert.deepStrictEqual(actual, 2)
    });

    it('Example 2', function () {
        nums = [7,5,6,8,3]
        actual = findGCD(nums);
        assert.deepStrictEqual(actual, 1)
    });

    it('Example 3', function () {
        nums = [3,3]
        actual = findGCD(nums);
        assert.deepStrictEqual(actual, 3)
    });
});