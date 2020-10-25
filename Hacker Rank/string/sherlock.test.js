const assert = require('assert');
const isValid = require('./sherlock');
describe('Sherlock Tests', () => {
    it('should return NO for aabbcd', () => {
        const s = isValid('aabbcd');
        assert.deepStrictEqual(s, 'NO')
    });
    it('should return YES for aaabb', () => {
        const s = isValid('aaabb');
        assert.deepStrictEqual(s, 'YES')
    });
    it('should return NO for aabbccddeefghi', () => {
        const s1 = isValid('aabbccddeefghi');
        assert.deepStrictEqual(s1, 'NO')
    });
    it('should return NO for aaaaabc', () => {
        const s1 = isValid('aaaaabc');
        assert.deepStrictEqual(s1, 'NO')
    });
    it('should return YES for abcdefghhgfedecba', () => {
        const s2 = isValid('abcdefghhgfedecba');
        assert.deepStrictEqual(s2, 'YES')
    });
    it('should return YES for aabbc', () => {
        const s2 = isValid('aabbc');
        assert.deepStrictEqual(s2, 'YES')
    });
});
