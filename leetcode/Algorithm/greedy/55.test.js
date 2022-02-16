/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let canGet = false;
    while (nums.length) {
        let i = nums.length - 1;
        for (let j = i - 1; j <= 0; j--) {
            if (nums[j] + j >= i) {
                //canGet
                if (j === 0) {
                    return true;
                }
            }
        }
        nums.pop();
    }
    return canGet;
};

const assert = require('assert');

describe('', function () {
    let nums, actual;

    it('Example 1 ', function () {
        nums = [2, 3, 1, 1, 4];
        actual = canJump(nums);
        assert.deepEqual(actual, true)
    });

    it('Example 2 ', function () {
        nums = [3, 2, 1, 0, 4];
        actual = canJump(nums);
        assert.deepEqual(actual, false)
    });
});