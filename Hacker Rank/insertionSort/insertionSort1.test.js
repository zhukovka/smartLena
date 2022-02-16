/**
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 * @param n{number}
 * @param arr{number[]}
 */
function insertionSort1(n, arr) {
    // Write your code here
    console.log(arr);
    let right = arr[arr.length - 1];
    let i = arr.length - 1;
    console.log(arr);
    for (; i >= 0; i--) {
        if (i === 0 || arr[i - 1] < right) {
            arr[i] = right;
            console.log(arr);
            return arr;
        } else {
            let t = arr[i - 1];
            arr[i] = t;
            console.log(arr);
        }
    }

}

const assert = require('assert');
describe('Insertion Sort - Part 1', function () {
    let n, arr, actual;

    it('should sort', function () {
        n = 5;
        arr = [1, 2, 4, 5, 3];
        actual = insertionSort1(n, arr);
        assert.deepStrictEqual(actual, [1, 2, 3, 4, 5])
    });

    it('should sort', function () {
        n = 5;
        arr = [2, 4, 6, 8, 3];
        actual = insertionSort1(n, arr);
        assert.deepStrictEqual(actual, [2, 3, 4, 6, 8])
    });

    it('should sort', function () {
        n = 10;
        arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
        actual = insertionSort1(n, arr);
        assert.deepStrictEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
});