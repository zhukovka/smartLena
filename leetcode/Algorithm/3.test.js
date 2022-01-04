/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let longest = '';
    let _chars = {};
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (_chars[char] >= 0) {
            if (longest.length < temp.length) {
                longest = temp;
            }
            temp = temp.substring(_chars[char] + 1);
            _chars[char] = -1;
        }
        _chars[char] = i;
        temp += char;
    }
    return Math.max(longest.length, temp.length);
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
    it('Example 5', function () {
        let s = "abcd";
        const actual = lengthOfLongestSubstring(s);
        assert.deepStrictEqual(actual, 4);
    });
    it('Example 5', function () {
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