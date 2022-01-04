/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * https://leetcode.com/problems/rotate-array/
 * Follow up:
 * Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {

}

const assert = require('assert');

describe('189. Rotate Array', function () {
    let nums, k;
    it('Example 1', function () {
        nums = [1, 2, 3, 4, 5, 6, 7];
        k = 3;
        const actual = rotate(nums, k);
        assert.deepStrictEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
    });
});