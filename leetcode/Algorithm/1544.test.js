/**
 * 1544. Make The String Great
 * (https://leetcode.com/problems/make-the-string-great/)
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
    let n = 0;
    while (n < s.length - 1) {
        let s1 = s[n];
        let s2 = s[n + 1];
        if (s1.toLowerCase() === s2.toLowerCase() && s1 !== s2) {
            s = s.substring(0, n) + s.substring(n + 2);
            n = 0;
            continue;
        }
        n += 1;
    }
    return s;
};

const assert = require('assert');

describe('1544. Make The String Great', function () {
    let s, actual;

    it('Example 1', function () {
        s = "leEeetcode";
        actual = makeGood(s);
        assert.deepEqual(actual, "leetcode")
    });

    it('Example 2', function () {
        s = "abBAcC";
        actual = makeGood(s);
        assert.deepEqual(actual, "")
    });

    it('Example 3', function () {
        s = "s";
        actual = makeGood(s);
        assert.deepEqual(actual, "s")
    });
});