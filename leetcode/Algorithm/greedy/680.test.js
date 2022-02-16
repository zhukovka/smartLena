/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;
    let deleted = false;
    while (l < r) {
        if (s[l] !== s[r]) {
            if (deleted) {
                return false;
            }
            // "ede....ed"
            // l+1 === r
            // (r-1 === l)
            // l++

            //"de.....ede"
            //r-1 === l
            //& l+1 === r
            //r--
            if (s[r - 1] === s[l]) {
                r--;
            } else {
                l++;
            }
            deleted = true;
            continue;
        }
        l++;
        r--;
    }
    return true;
};
const assert = require('assert');

describe('680. Valid Palindrome II', function () {
    let s, Output;

    it('Example 1', function () {
        s = "aba";
        Output = true;
        assert.deepEqual(validPalindrome(s), Output);
    });

    it('Example 2', function () {
        s = "abca"
        Output = true
        assert.deepEqual(validPalindrome(s), Output);
    });

    it('Example 3', function () {
        s = "abc"
        Output = false
        assert.deepEqual(validPalindrome(s), Output);
    });

    it('Example 4', function () {
        s = "de.....ede"
        Output = true
        assert.deepEqual(validPalindrome(s), Output);
    });

    it('Example 5', function () {
        s = "ede....ed"
        Output = true
        assert.deepEqual(validPalindrome(s), Output);
    });

    it('Example 6', function () {
        s = "cupuuffuupucu"
        Output = true
        assert.deepEqual(validPalindrome(s), Output);
    });
});