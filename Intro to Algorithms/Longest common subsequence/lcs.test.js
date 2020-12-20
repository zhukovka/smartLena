const assert = require('assert')
const lsc = require('./lcs')
describe('Longest common subsequence Tests', () => {
    it('should get LCS of ABCBDAB & BDCABA', () => {
        const res = lsc('ABCBDAB', 'BDCABA');
    });
});
