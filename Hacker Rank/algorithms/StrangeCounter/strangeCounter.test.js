const assert = require('assert');
const strangeCounter = require('./strangeCounter')
describe('Strange Counter Test', () => {
    it('should return 1 for t = 3', () => {
        assert.deepStrictEqual(strangeCounter(3), 1)
    });
    it('should return 6 for t = 4', () => {
        assert.deepStrictEqual(strangeCounter(4), 6)
    });
    
    it('should return 3 for t = 7', () => {
        assert.deepStrictEqual(strangeCounter(7), 3)
    });
    
    it('should return 1 for t = 21', () => {
        assert.deepStrictEqual(strangeCounter(21), 1)
    });
});
