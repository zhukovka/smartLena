const assert = require('assert');

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * @param nums
 * @param target
 * @returns {number|number|*}
 */
function search(nums, target) {

}

describe('704. Binary Search', () => {
    let nums, target;
    it('Example 1', () => {
        nums = [-1, 0, 3, 5, 9, 12];
        target = 9;
        const actual = search(nums, target)
        assert.deepStrictEqual(actual, 4)
    });

    it('Example 2', () => {
        nums = [-1, 0, 3, 5, 9, 12];
        target = 2;
        const actual = search(nums, target)
        assert.deepStrictEqual(actual, -1)
    });

    it('Example 3', () => {
        nums = [5];
        target = 5;
        const actual = search(nums, target)
        assert.deepStrictEqual(actual, 0)
    });

    it('Example 4', () => {
        nums = [-1, 0, 3, 5, 9, 12];
        target = 12;
        const actual = search(nums, target)
        assert.deepStrictEqual(actual, 5)
    });
});