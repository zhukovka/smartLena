/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    //two pinters
    let i = 0;
    let table = {};
    let subsrt = '';
    for (let j = 0; j < s.length; j++) {
        let ch = s[j];
        if (table[ch]) {
            i = Math.max(i, table[ch]);
        }
        if (j - i + 1 > subsrt.length) {
            subsrt = s.substring(i, j + 1);
        }
        table[ch] = j + 1;
    }
    return subsrt.length;
};
const assert = require('assert');

describe('Longest Substring Without Repeating Characters', function () {
    let s, actual;

    it('Example 1', function () {
        s = "abcabcbb"
        actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 3);
    });

    it('Example 2', function () {
        s = "bbbbb"
        actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 1);
    });

    it('Example 3', function () {
        s = "pwwkew"
        actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 3);
    });

    it('Example 4', function () {
        s = "aab"
        actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 2);
    });
});