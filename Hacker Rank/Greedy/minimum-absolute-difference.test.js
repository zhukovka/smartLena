/**
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 *
 * @param arr{number[]}
 */
function minimumAbsoluteDifference(arr) {
    let minDist = Math.abs(arr[0] - arr[1]);
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length - 1; i++) {
        let dist = Math.abs(arr[i] - arr[i + 1]);
        if (dist < minDist) {
            minDist = dist;
        }
    }
    return minDist;
}

const assert = require('assert');
describe('Minimum Absolute Difference in an Array', function () {

});