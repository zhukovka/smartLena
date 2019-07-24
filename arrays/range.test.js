const assert = require('assert');
const {intersection} = require('./range');
describe('ranges', function () {
    describe('intersection', function () {
        it('should return range 4-5 for 1-5 and 4-8', () => {
            let r = intersection([1, 5], [4, 8]);
            assert.deepStrictEqual(r, [4, 5]);
        });
        
        it('should return range 4-5 for 4-8 and 1-5', () => {
            let r = intersection([4, 8], [1, 5]);
            assert.deepStrictEqual(r, [4, 5]);
        });
        it('should return range 3-5 for 2-6 and 3-5', () => {
            let r = intersection([2, 6], [3, 5]);
            assert.deepStrictEqual(r, [3, 5]);
        });
        it('should return range 3-5 for 1-8 and 3-5', () => {
            let r = intersection([1, 8], [3, 5]);
            assert.deepStrictEqual(r, [3, 5]);
        });
        it('should return range 5-5 for 5-9 and 3-5', () => {
            let r = intersection([5, 9], [3, 5]);
            assert.deepStrictEqual(r, [5, 5]);
        });
        
        it('should return empty range for 1-5 and 6-8', () => {
            let r = intersection([1, 5], [6, 8]);
            assert.deepStrictEqual(r, []);
        });
    });
});
