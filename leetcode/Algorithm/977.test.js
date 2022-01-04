/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 *
 * Follow up: Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {

}

const assert = require('assert');

describe('977. Squares of a Sorted Array', function () {
    let nums;
    it('Example 1', function () {
        nums = [-4, -1, 0, 3, 10];
        const actual = sortedSquares(nums);
        assert.deepStrictEqual(actual, [0, 1, 9, 16, 100]);
    });

    it('Example 2', function () {
        nums = [-7, -3, 2, 3, 11];
        const actual = sortedSquares(nums);
        assert.deepStrictEqual(actual, [4, 9, 9, 49, 121]);
    });
});