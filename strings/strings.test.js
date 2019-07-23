const chai = require("chai");
const {isPalindrome, longestPalindromicSubstring} = require('./palindrome');
const caesarCipherEncryptor = require('./caesar');
describe('Palindrome Check', function () {

    it('Test Case #1', function () {
        chai.expect(isPalindrome("a")).to.deep.equal(true);
    });

    it('Test Case #2', function () {
        chai.expect(isPalindrome("ab")).to.deep.equal(false);
    });

    it('Test Case #3', function () {
        chai.expect(isPalindrome("aba")).to.deep.equal(true);
    });

    it('Test Case #4', function () {
        chai.expect(isPalindrome("abb")).to.deep.equal(false);
    });

    it('Test Case #5', function () {
        chai.expect(isPalindrome("abba")).to.deep.equal(true);
    });

    it('Test Case #6', function () {
        chai.expect(isPalindrome("abcdcba")).to.deep.equal(true);
    });

    it('Test Case #7', function () {
        chai.expect(isPalindrome("abcdefghhgfedcba")).to.deep.equal(true);
    });

    it('Test Case #8', function () {
        chai.expect(isPalindrome("abcdefghihgfedcba")).to.deep.equal(true);
    });

    it('Test Case #9', function () {
        chai.expect(isPalindrome("abcdefghihgfeddcba")).to.deep.equal(false);
    });
});

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

describe('Longest Palindromic Substring', function () {
    it('it should return aba for abazy', function () {
        chai.expect(longestPalindromicSubstring("abazy")).to.deep.equal("aba");
    });
    
    it('it should return xyzzyx for xyzzyxf', function () {
        chai.expect(longestPalindromicSubstring("xyzzyxf")).to.deep.equal("xyzzyx");
    });
    
    it('it should return 5abbba5 for 5abbba5', function () {
        chai.expect(longestPalindromicSubstring("5abbba5")).to.deep.equal("5abbba5");
    });
    
    it('Test Case #1', function () {
        chai.expect(longestPalindromicSubstring("a")).to.deep.equal("a");
    });
    
    it('Test Case #2', function () {
        chai.expect(longestPalindromicSubstring("it's highnoon")).to.deep.equal("noon");
    });
    
    it('Test Case #3', function () {
        chai.expect(longestPalindromicSubstring("noon high it is")).to.deep.equal("noon");
    });
    
    it('Test Case #4', function () {
        chai.expect(longestPalindromicSubstring("abccbait's highnoon")).to.deep.equal("abccba");
    });
    
    it('Test Case #5', function () {
        chai.expect(longestPalindromicSubstring("abaxyzzyxf")).to.deep.equal("xyzzyx");
    });
    
    it('Test Case #6', function () {
        chai.expect(longestPalindromicSubstring("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz")).to.deep.equal("zzzzzzzzzzzzzzzzzzzz");
    });
    
    it('Test Case #7', function () {
        chai.expect(longestPalindromicSubstring("abcdefgfedcba")).to.deep.equal("abcdefgfedcba");
    });
    
    it('Test Case #8', function () {
        chai.expect(longestPalindromicSubstring("abcdefghfedcbaa")).to.deep.equal("aa");
    });
    
    it('Test Case #9', function () {
        chai.expect(longestPalindromicSubstring("abcdefggfedcba")).to.deep.equal("abcdefggfedcba");
    });
    
    it('Test Case #10', function () {
        chai.expect(longestPalindromicSubstring("zzzzzzz2345abbbba5432zzbbababa")).to.deep.equal("zz2345abbbba5432zz");
    });
    
    it('Test Case #11', function () {
        chai.expect(longestPalindromicSubstring("z234a5abbbba54a32z")).to.deep.equal("5abbbba5");
    });
    
    it('Test Case #12', function () {
        chai.expect(longestPalindromicSubstring("z234a5abbba54a32z")).to.deep.equal("5abbba5");
    });
});
