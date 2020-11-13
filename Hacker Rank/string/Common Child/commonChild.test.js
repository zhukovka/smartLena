const assert = require('assert');
const commonChild = require('./commonChild');

describe('Common Child Tests', () => {
    it('should return 2 (AY)', () => {
        const s1 = 'HARRY';
        const s2 = 'SALLY';
        assert.deepStrictEqual(commonChild(s1, s2), 2)
    });
    
    it('should return 3 (AYA)', () => {
        const s1 = 'HARRYA';
        const s2 = 'SALLYA';
        assert.deepStrictEqual(commonChild(s1, s2), 3)
    });
    it('should return 3 (ABC/ ABD)', () => {
        const s1 = '--ABCD';
        const s2 = '____ABDC';
        assert.deepStrictEqual(commonChild(s1, s2), 3)
    });
});
