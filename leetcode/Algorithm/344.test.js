/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let mid = s.length / 2 | 0;
    for (let i = 0; i < mid; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    // return s;
};

const assert = require('assert');
describe('344. Reverse String', function () {
    let s, actual;

    it('Example 1', function () {
        s = ["h", "e", "l", "l", "o"]
        actual = reverseString(s);
        assert.deepStrictEqual(s, ["o", "l", "l", "e", "h"]);
    });

    it('Example 2', function () {
        s = ["H", "a", "n", "n", "a", "h"]
        actual = reverseString(s);
        assert.deepStrictEqual(s, ["h", "a", "n", "n", "a", "H"]);
    });

});
