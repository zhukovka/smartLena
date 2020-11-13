const assert = require('assert');
const twoStrings = require('./twoStrings');

describe('Two Strings test', () => {
    it('should return NO for ', () => {
        const s1 = 'wouldyoulikefries'
        const s2 = 'abcabcabcabcabcabc'
        assert.deepStrictEqual(twoStrings(s1, s2), 'NO')
    });
});
