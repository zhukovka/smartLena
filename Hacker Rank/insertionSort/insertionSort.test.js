/**
 * https://www.hackerrank.com/challenges/correctness-invariant/problem?h_r=internal-search&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 * @param n{number}
 * @param arr{number[]}
 */
function insertionSort2(n, arr) {
    // Write your code here
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        j++;
        arr[j] = temp;
    }
    console.log(arr.join(' '))
    return arr;
}

const assert = require('assert');
describe('', function () {
    let arr, n, actual;
    it('Example 1', function () {
        arr = [1, 4, 3, 5, 6, 2];
        n = arr.length;
        assert.deepStrictEqual(insertionSort2(n, arr), [1, 2, 3, 4, 5, 6])
    });
});