/**
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * @param arr{number[]}
 */
function balancedSums(arr) {
    // Write your code here
    let leftSum = 0;
    let rightSum = arr.slice(1).reduce((acc, n) => acc + n, 0);
    let i = 1;
    while (rightSum >= leftSum) {
        if (rightSum === leftSum) {
            return 'YES';
        }
        rightSum -= arr[i];
        leftSum += arr[i - 1];
        i++;
    }
    return 'NO';
}

const assert = require('assert');
describe('Sherlock and Array', function () {
    let arr, actual;

    it('Example 1', function () {
        arr = [5, 6, 8, 11]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'YES')
    });

    it('Example 2', function () {
        arr = [1]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'YES')
    });

    it('Example 3', function () {
        arr = [1, 2, 3]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'NO')
    });

    it('Example 4', function () {
        arr = [1, 1, 4, 1, 1]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'YES')
    });

    it('Example 5', function () {
        arr = [2, 0, 0, 0]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'YES')
    });

    it('Example 6', function () {
        arr = [0, 0, 2, 0]
        actual = balancedSums(arr);
        assert.deepStrictEqual(actual, 'YES')
    });
});