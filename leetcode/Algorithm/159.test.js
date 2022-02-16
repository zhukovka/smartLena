/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let i = 0;
    let table = new Map();
    let maxLen = 0;
    for (let j = 0; j < s.length; j++) {
        let ch = s[j];
        if (!table.has(ch) && table.size === 2) {
            for (const [k, v] of table.entries()) {
                if (v < j) {
                    table.delete(k);
                    i = v;
                }
            }
        }
        maxLen = Math.max(maxLen, j - i + 1);
        table.set(ch, j + 1);
    }
    return maxLen;
};

const assert = require('assert');

describe('159. Longest Substring with At Most Two Distinct Characters', function () {
    let s, actual;

    it('Example 1', function () {
        s = "eceba"
        actual = lengthOfLongestSubstringTwoDistinct(s);
        assert.deepStrictEqual(actual, 3);
    });

    it('Example 2', function () {
        s = "ccaabbb"
        actual = lengthOfLongestSubstringTwoDistinct(s);
        assert.deepStrictEqual(actual, 5);
    });

});