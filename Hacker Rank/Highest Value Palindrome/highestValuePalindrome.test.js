const highestValuePalindrome = require('./highestValuePalindrome');
const assert = require('assert');

describe('Highest Value Palindrome Test', () => {
    it('should return 3993', () => {
        const input = '3943';
        assert.deepStrictEqual(highestValuePalindrome(input, 0, 1), '3993')
    });
    it('should return 992299', () => {
        const input = '092282';
        assert.deepStrictEqual(highestValuePalindrome(input, 6, 3), '992299')
    });
    
    it('should return 91199119', () => {
        const input = '11119111';
        assert.deepStrictEqual(highestValuePalindrome(input, input.length, 4), '91199119')
    });
    it('should return 9920299', () => {
        const input = '0920282';
        assert.deepStrictEqual(highestValuePalindrome(input, input.length, 3), '9920299')
    });
    it('should return -1', () => {
        const input = '0011';
        assert.deepStrictEqual(highestValuePalindrome(input, 4, 1), -1)
    });
    it('should return 818', () => {
        const input = '118';
        assert.deepStrictEqual(highestValuePalindrome(input, 3, 1), '818')
    });
    
});
