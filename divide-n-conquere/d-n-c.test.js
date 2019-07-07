const assert = require('assert');
const findMaximumSubarray = require('./max-subarray');
const mergeSort = require('./merge-sort');

describe('Divide and conquer', function () {

    let numbers;
    beforeEach(function () {
        numbers = [3, 5, -9, 8, 11];
    });

    describe('findMaximumSubarray', function () {
        it('should find Maximum Subarray', function () {
            const [low, high, maxSum] = findMaximumSubarray(numbers, 0, numbers.length - 1);
            assert.deepStrictEqual(numbers.slice(low, high + 1), [8, 11])
        });
    });

    describe('merge sort', function () {
        it('should sort an array', function () {
            const sorted = mergeSort(numbers, 0, numbers.length);
            assert.deepStrictEqual(sorted, [-9, 3, 5, 8, 11]);
        });
    })
});