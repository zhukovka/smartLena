const assert = require('assert');
const multiplySquareMatrices = require('./multiply').multiplySquareMatrices;

describe('Matrices', function () {
    describe('matrices multiplication', function () {
            let A;
            let B;
            let expected;
            beforeEach(function () {
                A = [[1, 2], [3, 4]];
                B = [[5, 6], [7, 8]];
                expected = [[19, 22], [43, 50]];
            });

            it('should multiply square matrices', function () {
                const C = multiplySquareMatrices(A, B);

                assert.deepStrictEqual(C, expected);
            });
        }
    )
});