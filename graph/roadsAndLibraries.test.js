const assert = require('assert');
describe('Roads and Libraries', () => {
    const roadsAndLibraries = require('./roadsAndLibraries');
    
    it('should find the minimum cost of making libraries in 2 cities', () => {
        const cities = [
            [1, 2],
            [3, 1],
            [2, 3]
        ];
        
        assert.deepStrictEqual(roadsAndLibraries(3, 2, 1, cities), 4);
    });
    
    it('should find the minimum cost of making libraries in 6 cities', () => {
        const cities = [
            [1, 3],
            [3, 4],
            [2, 4],
            [1, 2],
            [2, 3],
            [5, 6]];
        
        assert.deepStrictEqual(roadsAndLibraries(6, 2, 5, cities), 12);
    });
});
