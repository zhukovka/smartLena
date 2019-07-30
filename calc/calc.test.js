const assert = require('assert');
describe('Sum or products', () => {
    const sumOfProduct = require('./sumOfProduct');
    it('should return 23', () => {
        const r = sumOfProduct([7, 2, 1]);
        assert.deepStrictEqual(r, 23);
    });
});
