/**
 * 167. Two Sum II - Input array is sorted
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let x = target - numbers[i];
        if (numbers[j] > x) {
            j--;
        } else if (numbers[j] < x) {
            i++;
        } else if (numbers[j] === x) {
            return [i + 1, j + 1];
        }
    }
};

const assert = require('assert');

describe('167. Two Sum II - Input array is sorted', function () {
    it('Example 1', function () {
        let numbers = [2, 7, 11, 15], target = 9;
        const actual = twoSum(numbers, target);
        assert.deepStrictEqual(actual, [1, 2]);
    });
    it('Example 2', function () {
        let numbers = [2, 3, 4], target = 6;
        const actual = twoSum(numbers, target);
        assert.deepStrictEqual(actual, [1, 3]);
    });
    it('Example 3', function () {
        let numbers = [-1, 0], target = -1;
        const actual = twoSum(numbers, target);
        assert.deepStrictEqual(actual, [1, 2]);
    });

});