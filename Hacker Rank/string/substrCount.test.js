const assert = require('assert');
const substrCount = require('./substrCount');

describe('Test substrCount', () => {
    describe('Test isPalindrome', () => {
        const isPalindrome = require('./palindrome');
        it('should return true', () => {
            // const p = isPalindrome('dad')
            // assert.deepStrictEqual(p, true)
            // assert.deepStrictEqual(isPalindrome('dddd'), true)
            // assert.deepStrictEqual(isPalindrome('d'), true)
            assert.deepStrictEqual(isPalindrome('as'), false)
        });
    });
    it('should return 7 for asasd', () => {
        const s = substrCount(5, 'asasd');
        assert.deepStrictEqual(s, 7)
    });
    
    it('should return 10 for abcbaba', () => {
        const s = substrCount(7, 'abcbaba');
        assert.deepStrictEqual(s, 10)
    });
    it('should return 10 for aaaa', () => {
        const s = substrCount(4, 'aaaa');
        assert.deepStrictEqual(s, 10)
    });
    
    it('should return 10 for aabaa', () => {
        const s = substrCount(4, 'aabaa');
        //aa,aba,aabaa,aa
        assert.deepStrictEqual(s, 9)
    });
    
    it('should return 10 for bbaabaa', () => {
        //bb,bbaa,aa,aba,aabaa,
        const s = substrCount(4, 'bbbaaa');
        //bbbaaa, bbaa
        assert.deepStrictEqual(s, 9)
    });
});
