/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 * @param nums{number[]}
 * @param target{number}
 */
function searchInsert(nums, target) {

}

const assert = require('assert');
describe('35. Search Insert Position', () => {
    let nums, target;
    it('Example 1', () => {
        nums = [1, 3, 5, 6];
        target = 5;
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 2)
    });

    it('Example 2', () => {
        nums = [1, 4, 5, 6];
        target = 2
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 1)
    });

    it('Example 3', () => {
        nums = [1, 3, 5, 6];
        target = 7
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 4)
    });

    it('Example 4', () => {
        nums = [1, 3, 5, 6];
        target = 0;
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 0)
    });

    it('Example 5', () => {
        nums = [1];
        target = 0
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 0)
    });

    it('Example 6', () => {
        nums = [-3, -1, 3, 90];
        target = 0
        const actual = searchInsert(nums, target)
        assert.deepStrictEqual(actual, 2)
    });
});