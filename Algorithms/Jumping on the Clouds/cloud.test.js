const assert = require('assert');

const jumpingOnClouds = require('./cloud');
describe('Jumping on the Clouds Tests', () => {
    it('should return 96', () => {
        const res = jumpingOnClouds([0, 0, 1, 0], 2)
        assert.deepStrictEqual(res, 96);
    });
    
    it('should return 92', () => {
        const res = jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)
        assert.deepStrictEqual(res, 92);
    });
    
    it('should return 80', () => {
        const res = jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)
        assert.deepStrictEqual(res, 80);
    });
});
