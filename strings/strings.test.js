const assert = require('assert');
const chai = require("chai");
const palindrome = require('./palindrome');
const caesarCipherEncryptor = require('./caesar');
describe('Palindrome Check', function () {

    it('Test Case #1', function () {
        chai.expect(palindrome.isPalindrome("a")).to.deep.equal(true);
    });

    it('Test Case #2', function () {
        chai.expect(palindrome.isPalindrome("ab")).to.deep.equal(false);
    });

    it('Test Case #3', function () {
        chai.expect(palindrome.isPalindrome("aba")).to.deep.equal(true);
    });

    it('Test Case #4', function () {
        chai.expect(palindrome.isPalindrome("abb")).to.deep.equal(false);
    });

    it('Test Case #5', function () {
        chai.expect(palindrome.isPalindrome("abba")).to.deep.equal(true);
    });

    it('Test Case #6', function () {
        chai.expect(palindrome.isPalindrome("abcdcba")).to.deep.equal(true);
    });

    it('Test Case #7', function () {
        chai.expect(palindrome.isPalindrome("abcdefghhgfedcba")).to.deep.equal(true);
    });

    it('Test Case #8', function () {
        chai.expect(palindrome.isPalindrome("abcdefghihgfedcba")).to.deep.equal(true);
    });

    it('Test Case #9', function () {
        chai.expect(palindrome.isPalindrome("abcdefghihgfeddcba")).to.deep.equal(false);
    });
})

describe('Caesar Cipher Encryptor', function () {
    it('Test Case #1', function () {
        chai.expect(
            caesarCipherEncryptor("abc", 0)).to.deep.equal("abc");
    });

    it('Test Case #2', function () {
        chai.expect(
            caesarCipherEncryptor("abc", 3)).to.deep.equal("def");
    });

    it('Test Case #3', function () {
        chai.expect(
            caesarCipherEncryptor("xyz", 2)).to.deep.equal("zab");
    });

    it('Test Case #4', function () {
        chai.expect(
            caesarCipherEncryptor("xyz", 5)).to.deep.equal("cde");
    });

    it('Test Case #5', function () {
        chai.expect(
            caesarCipherEncryptor("abc", 26)).to.deep.equal("abc");
    });

    it('Test Case #6', function () {
        chai.expect(
            caesarCipherEncryptor("abc", 52)).to.deep.equal("abc");
    });

    it('Test Case #7', function () {
        chai.expect(
            caesarCipherEncryptor("abc", 57)).to.deep.equal("fgh");
    });
});

describe('one edit away', function () {
    const oneEdit = require('./oneEdit');
    it('should return true for pale and bale', function () {
        const isOneEditAway = oneEdit('pale', 'bale');
        assert.deepStrictEqual(isOneEditAway, true);
    });

    it('should return true for qwert1y and qwerty', function () {
        const isOneEditAway = oneEdit('qwert1y', 'qwerty');
        assert.deepStrictEqual(isOneEditAway, true);
    });

    it('should return false for pale and pled', function () {
        const isOneEditAway = oneEdit('pale', 'pled');
        assert.deepStrictEqual(isOneEditAway, false);
    });
    it('should return false for aaaaaa and aaaa', function () {
        const isOneEditAway = oneEdit('aaaaaa', 'aaaa');
        assert.deepStrictEqual(isOneEditAway, false);
    });
});