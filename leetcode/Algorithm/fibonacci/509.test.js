/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 * @param {number} n
 * @return {number}
 */
const fibonacci = function (n) {
    const nums = [0, 1];

    function f(n) {
        if (nums[n] >= 0) {
            return nums[n];
        }
        if (nums[n - 1] && nums[n - 2]) {
            nums[n] = nums[nums - 1] + nums[n - 2];
            return nums[n];
        }
        if (n > 1) {
            return f(n - 1) + f(n - 2);
        }
    }

    let f1 = f(n);
    return f1;
};

const assert = require('assert');
describe('509. Fibonacci Number', function () {
    let n;
    it('Example 1', function () {
        n = 2;
        let actual = fibonacci(n);
        assert.deepStrictEqual(actual, 1);
    });

    it('Example 2', function () {
        n = 3;
        let actual = fibonacci(n);
        assert.deepStrictEqual(actual, 2);
    });

    it('Example 3', function () {
        n = 4;
        let actual = fibonacci(n);
        assert.deepStrictEqual(actual, 3);
    });

    it('Example F20', function () {
        n = 20;
        let actual = fibonacci(n);
        assert.deepStrictEqual(actual, 6765);
    });
});