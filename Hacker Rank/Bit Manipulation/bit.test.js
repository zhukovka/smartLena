const assert = require('assert');

describe('Bit Manipulation', () => {
    describe('Flip bit', () => {
        const {flipBit} = require('./bitManipulations');
        it('should flip bit in the position 0 and back', () => {
            const bit = 0b01010101;
            const flip = flipBit(bit, 0);
            const flipBack = flipBit(flip, 0);
            assert.deepStrictEqual(flip.toString(2), '1010100');
            assert.deepStrictEqual(flipBack.toString(2), '1010101');
        });
        
        it('should flip bit in the position 8', () => {
            const bit = 0b01010101;
            const flip = flipBit(bit, 8);
            const flipBack = flipBit(flip, 8);
            //01010101
            //01010101
            assert.deepStrictEqual(flip.toString(2), '101010101');
            assert.deepStrictEqual(flipBack.toString(2), '1010101');
        });
    });
    
    describe('Get bit', () => {
        const {getBit} = require('./bitManipulations');
        it('should get bit in the position 0', () => {
            const bitString = 0b01010101;
            const bit = getBit(bitString, 0);
            assert.deepStrictEqual(bit.toString(2), '1');
        });
        
        it('should get bit in the position 1', () => {
            const bitString = 0b01010101;
            const bit = getBit(bitString, 1);
            assert.deepStrictEqual(bit.toString(2), '0');
        });
        
    });
    describe('Lonely integer', () => {
        const lonelyInteger = require('./lonelyinteger');
        
        it('should return 1', () => {
            const arr = [1];
            const one = lonelyInteger(arr);
            assert.deepStrictEqual(one, 1);
        });
        
        it('should return 2', () => {
            const arr = [1, 1, 2];
            const one = lonelyInteger(arr);
            assert.deepStrictEqual(one, 2);
        });
        
        it('should return 4', () => {
            const arr = [1, 2, 4, 3, 2, 3, 1];
            const one = lonelyInteger(arr);
            assert.deepStrictEqual(one, 4);
        });
        
        it('should return 95', () => {
            const arr = [95, 93, 57, 4, 57, 93, 9];
            const one = lonelyInteger(arr);
            assert.deepStrictEqual(one, 95);
        });
    });
    
    describe('Maximizing XOR', () => {
        const maximizingXor = require('./maximizingXor')
        it('should return 7', () => {
            const max = maximizingXor(10, 15);
            assert.deepStrictEqual(max, 7);
        });
        it('should return 127', () => {
            const max = maximizingXor(11, 100);
            assert.deepStrictEqual(max, 127);
        });
    });
});
