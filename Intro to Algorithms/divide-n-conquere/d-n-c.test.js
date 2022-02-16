const assert = require('assert');
const findMaximumSubarray = require('./max-subarray');
const mergeSort = require('./merge-sort');

describe('Divide and conquer', function () {

    let numbers;
    beforeEach(function () {
        numbers = [3, 5, 0, 0, 0, 0, 0, -9, 8, -1, 11, -5];
    });

    describe('findMaximumSubarray', function () {
        it('should find Maximum Subarray', function () {
            const maxSum = findMaximumSubarray(numbers, 0, numbers.length - 1);
            assert.deepStrictEqual(maxSum, 19);
            // const [low, high, maxSum] = findMaximumSubarray(numbers, 0, numbers.length - 1);
            // assert.deepStrictEqual(numbers.slice(low, high + 1), [8, 11])
        });

        it('should find Maximum Subarray 2', function () {
            let array = [1, -4, 3, -4];
            const maxSum = findMaximumSubarray(array, 0, array.length - 1);
            assert.deepStrictEqual(maxSum, 19);
            // const [low, high, maxSum] = findMaximumSubarray(numbers, 0, numbers.length - 1);
            // assert.deepStrictEqual(numbers.slice(low, high + 1), [8, 11])
        });
    });

    describe('merge sort', function () {
        it('should sort an array', function () {
            const sorted = mergeSort(numbers, 0, numbers.length);
            assert.deepStrictEqual(sorted, [-9, 3, 5, 8, 11]);
        });
    })
});