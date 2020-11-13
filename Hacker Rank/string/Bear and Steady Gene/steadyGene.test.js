const assert = require('assert');
const steadyGene = require('./steadyGene');
describe('Bear and Steady Gene Tests', () => {
    it('should return 5', () => {
        const res = steadyGene('GAAATAAA');
        assert.deepStrictEqual(res, 5);
    });
});
