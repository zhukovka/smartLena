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

describe('Next lexicographical permutation algorithm', function () {

    describe('Longest suffix', function () {
            const {longestNonIncreasingSuffix} = require('./nextPermutation');
            it('should find the longest suffix that is non-increasing [0, 1, 2, 5, 3, 3, 0] is [5, 3, 3, 0]', function () {
                const suffix = longestNonIncreasingSuffix([0, 1, 2, 5, 3, 3, 0]);
                assert.deepStrictEqual(suffix, [5, 3, 3, 0]);
            });

            it('should find the longest suffix that is non-increasing dkhc is khc', function () {
                const suffix = longestNonIncreasingSuffix('dkhc');
                assert.deepStrictEqual(suffix, 'khc');
            });

            it('should find the longest suffix abdc -> dc', function () {
                const suffix = longestNonIncreasingSuffix('abdc');
                assert.deepStrictEqual(suffix, 'dc');
            });
        }
    );

    describe('Next permutation', function () {
        const {nextPermutation} = require('./nextPermutation');
        it('should return hegf', function () {
            const bigger = nextPermutation('hefg');
            assert.deepStrictEqual(bigger, 'hegf');
        });

        it('should return dhkc', function () {
            const bigger = nextPermutation('dhck');
            assert.deepStrictEqual(bigger, 'dhkc');
        });

        it('should return 4873->7348', function () {
            const bigger = nextPermutation('4873');
            assert.deepStrictEqual(bigger, '7348');
        });
        it('should return hcdk', function () {
            const bigger = nextPermutation('dkhc');
            assert.deepStrictEqual(bigger, 'hcdk');
        });

        it('should return fedcbabdc', function () {
            const bigger = nextPermutation('fedcbabcd');
            assert.deepStrictEqual(bigger, 'fedcbabdc');
        });

        it('should return abdc -> acbd', function () {
            const bigger = nextPermutation('abdc');
            assert.deepStrictEqual(bigger, 'acbd');
        });

        it('should return zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgmw -> zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm', function () {
            const bigger = nextPermutation('zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgmw');
            assert.deepStrictEqual(bigger, 'zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm');
        });
    });
});