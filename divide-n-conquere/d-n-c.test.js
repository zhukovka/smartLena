const assert = require('assert');
const findMaximumSubarray = require('./max-subarray');

describe('Divide and conquer', function () {

    describe('findMaximumSubarray', function () {
        it('should find Maximum Subarray', function () {
            let numbers = [3, 5, -9, 8, 11];
            const [low, high, maxSum] = findMaximumSubarray(numbers, 0, numbers.length - 1);
            console.log(`result: low: ${low}, high: ${high}, maxSum: ${maxSum}`)
            // assert.deepStrictEqual(numbers.slice(low, high+1), [5, -4, 8, 11])
        });
    });
});