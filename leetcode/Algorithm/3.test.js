/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let curr = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let indexOf = curr.indexOf(char);
        if (indexOf > -1) {
            longest = Math.max(curr.length, longest);
            curr = curr.substring(indexOf + 1) + char;
        } else {
            curr += char;
        }
    }
    return Math.max(longest, curr.length);
};

const assert = require('assert');

describe('3. Longest Substring Without Repeating Characters', function () {
    it('Example 1', function () {
        let s = "abcabcbb";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 3);
    });
    it('Example 2', function () {
        let s = "bbbbb";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 1);
    });
    it('Example 3', function () {
        let s = "pwwkew";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 3);
    });
    it('Example 4', function () {
        let s = "";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 0);
    });
    it('Example 5 abcd', function () {
        let s = "abcd";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 4);
    });
    it('Example 5 dvdf', function () {
        let s = "dvdf";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 3);
    });
    it('Example 6', function () {
        let s = "tmmzuxt";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 5);
    });

});