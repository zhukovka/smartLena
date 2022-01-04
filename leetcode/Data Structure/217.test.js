/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct. https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {

}

const assert = require('assert');
describe('217. Contains Duplicate', function () {
    let nums, actual;
    it('Example 1', function () {
        //Input:
        nums = [1, 2, 3, 1]
        actual = containsDuplicate(nums);
        assert.deepStrictEqual(actual, true);
    });
});