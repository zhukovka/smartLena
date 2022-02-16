/**
 * 6 Maximum Number of Prizes
 *  Problem Introduction
 *  You are organizing a funny competition for children.
 *  As a prize fund you have 𝑛 candies.
 *  You would like to use these candies for top 𝑘 places in a competition with a natural restriction
 *  that a higher place gets a larger number of candies.
 *  To make as many children happy as possible, you are going to find the largest value of 𝑘 for which it is possible.
 * @param n{number}
 */
function differentSummands(n) {
    const summands = {};
    let i = 1;
    while (i <= n) {
        let diff = n - i;
        if (!summands[i] && !summands[diff]) {
            summands[i] = true;
        } else {
            summands[n] = true;
        }
        n = diff;
        i++;
    }
    let keys = Object.keys(summands);
    console.log(keys);
    return keys.length;
}

const assert = require('assert');

describe('Maximum Number of Prizes', function () {
    let n, k, actual;

    it('Sample 1 ', function () {
        n = 6;
        k = 3;
        actual = differentSummands(n);
        assert.deepEqual(actual, k);
    });

    it('Sample 2 ', function () {
        n = 8;
        k = 3;
        actual = differentSummands(n);
        assert.deepEqual(actual, k);
    });

    it('Sample 3 ', function () {
        n = 2;
        k = 1;
        actual = differentSummands(n);
        assert.deepEqual(actual, k);
    });
});