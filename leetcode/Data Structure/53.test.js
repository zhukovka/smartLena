/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let curr = nums[0];
    let max = curr;
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(curr + nums[i], nums[i]);
        if (curr > max) {
            max = curr;
        }
    }
    return max;
}

const assert = require('assert');

describe('53. Maximum Subarray', function () {
    let nums;
    it('Example 1', function () {
        nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        let actual = maxSubArray(nums);
        assert.deepStrictEqual(actual, 6);
    });

    it('Example 2', function () {
        nums = [1];
        let actual = maxSubArray(nums);
        assert.deepStrictEqual(actual, 1);
    });

    it('Example 3', function () {
        nums = [5, 4, -1, 7, 8];
        let actual = maxSubArray(nums);
        assert.deepStrictEqual(actual, 23);
    });
    it('Example 4', function () {
        nums = [-2, 1];
        let actual = maxSubArray(nums);
        assert.deepStrictEqual(actual, 1);
    });
});