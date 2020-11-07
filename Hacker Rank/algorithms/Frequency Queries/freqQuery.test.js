const assert = require('assert');
const freqQuery = require('./freqQuery');

describe('Frequency Queries', () => {
    it('should return [0,1] for test1', () => {
        const input = [
            [1, 5],
            [1, 6],
            [3, 2],
            [1, 10],
            [1, 10],
            [1, 6],
            [2, 5],
            [3, 2],
        ];
        assert.deepStrictEqual(freqQuery(input), [0, 1])
    });
    
    it('should return [0,1] for test2', () => {
        const input = [
            [3, 4],
            [2, 1003],
            [1, 16],
            [3, 1],
        ];
        assert.deepStrictEqual(freqQuery(input), [0, 1])
    });
    
    it('should return all 0 for test 12', () => {
        const input = [
            [1, 64],
            [1, 16777216],
            [3, 17],
            [2, 32768],
            [1, 1],
            [2, 32],
            [3, 22],
            [2, 2097152],
            [3, 34],
            [1, 4],
            [3, 72],
            [3, 56],
            [1, 16384],
            [1, 65536],
            [3, 51],
            [2, 1048576],
            [3, 40],
            [2, 8],
            [2, 256],
            [2, 64],
            [1, 536870912],
            [3, 256],
            [2, 32768],
            [2, 16777216],
            [2, 1048576],
            [3, 155],
            [1, 2],
            [1, 256],
            [2, 524288],
            [3, 258],
            [2, 65536],
            [3, 344],
            [2, 2],
            [2, 65536],
            [3, 202],
            [3, 5],
            [1, 33554432],
            [1, 1],
            [1, 16],
            [2, 33554432],
            [1, 512],
            [3, 163],
            [3, 158],
            [2, 2],
            [2, 268435456],
            [3, 88],
            [2, 4194304],
            [1, 32],
            [2, 1],
            [3, 69],
            [1, 512],
            [1, 16384],
            [3, 528],
        ];
        assert.deepStrictEqual(freqQuery(input), [0, 0])
    });
    
    it('should return for test5', () => {
        const test5 = require('./test5');
        assert.deepStrictEqual(freqQuery(test5.input), test5.res)
    });
});
