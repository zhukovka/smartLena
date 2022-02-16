/**
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * @param a{number}
 * @param b{number}
 */
function squares(a, b) {
    // Write your code here
    let nums = [];
    while (a <= b) {
        let n = Math.sqrt(a);
        if (n % 1 === 0) {
            nums.push(a);
            a = Math.pow(n + 1, 2);
        } else {
            a++;
        }
    }
    return nums.length;
}

const assert = require('assert');
describe('Sherlock and Squares', function () {
    let a, b, actual;

    it('Example 1', function () {
        a = 24;
        b = 49;
        actual = squares(a, b);
        assert.deepStrictEqual(actual, 3);
    });

    it('Example 2', function () {
        a = 3;
        b = 9;
        actual = squares(a, b);
        assert.deepStrictEqual(actual, 2);
    });

    it('Example 3', function () {
        a = 17;
        b = 24;
        actual = squares(a, b);
        assert.deepStrictEqual(actual, 0);
    });
});