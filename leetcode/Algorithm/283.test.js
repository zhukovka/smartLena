/**
 * 283. Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {

}

const assert = require('assert');

describe('283. Move Zeroes', function () {
    let nums, k;
    it('Example 1', function () {
        nums = [0, 1, 0, 3, 12]
        const actual = moveZeroes(nums);
        assert.deepStrictEqual(nums, [1, 3, 12, 0, 0]);
    });
    it('Example 2', function () {
        nums = [0]
        const actual = moveZeroes(nums);
        assert.deepStrictEqual(nums, [0]);
    });

});