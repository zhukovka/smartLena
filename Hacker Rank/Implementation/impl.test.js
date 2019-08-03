const assert = require('assert');

describe('Bigger is Greater', function () {
    const biggerIsGreater = require('./biggerIsGreater');
    it('should return ba', function () {
        const bigger = biggerIsGreater('ab');
        assert.deepStrictEqual(bigger, 'ba');
    });

    it('should return no answer', function () {
        const bigger = biggerIsGreater('bb');
        assert.deepStrictEqual(bigger, 'no answer');
    });
    it('should return no answer for dcba', function () {
        const bigger = biggerIsGreater('dcba');
        assert.deepStrictEqual(bigger, 'no answer');
    });

    it('should return hegf', function () {
        const bigger = biggerIsGreater('hefg');
        assert.deepStrictEqual(bigger, 'hegf');
    });

    it('should return dhkc', function () {
        const bigger = biggerIsGreater('dhck');
        assert.deepStrictEqual(bigger, 'dhkc');
    });

    it('should return fedcbabdc', function () {
        const bigger = biggerIsGreater('fedcbabcd');
        assert.deepStrictEqual(bigger, 'fedcbabdc');
    });

    it('should return abdc -> acbd', function () {
        const bigger = biggerIsGreater('abdc');
        assert.deepStrictEqual(bigger, 'acbd');
    });

    it('should return zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgmw -> zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm', function () {
        const bigger = biggerIsGreater('zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgmw');
        assert.deepStrictEqual(bigger, 'zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm');
    });

    it('should return zyyxwwtrrnmlggfeb -> no answer', function () {
        const bigger = biggerIsGreater('zyyxwwtrrnmlggfeb');
        assert.deepStrictEqual(bigger, 'no answer');
    });

    it('should return la -> no answer', function () {
        const bigger = biggerIsGreater('la`');
        assert.deepStrictEqual(bigger, 'no answer');
    });

    it('should return hcdk', function () {
        const bigger = biggerIsGreater('dkhc');
        assert.deepStrictEqual(bigger, 'hcdk');
    });
});