/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const table = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let x = table[num];
        if (x >= 0) {
            return [x, i];
        } else {
            x = target - num;
            table[x] = i;
        }
    }
    return [];
}

const assert = require('assert');

describe('1. Two Sum', function () {
    let nums, target;
    it('Example 1', function () {
        nums = [2, 7, 11, 15];
        target = 9;
        const actual = twoSum(nums, target);
        assert.deepStrictEqual(actual, [0, 1]);
    });

    it('Example 2', function () {
        nums = [3, 2, 4];
        target = 6;
        const actual = twoSum(nums, target);
        assert.deepStrictEqual(actual, [1, 2]);
    });

    it('Example 3', function () {
        nums = [3, 3];
        target = 6
        const actual = twoSum(nums, target);
        assert.deepStrictEqual(actual, [0, 1]);
    });
});