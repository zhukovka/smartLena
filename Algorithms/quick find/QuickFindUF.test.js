const assert = require('assert');
const QuickFindUF = require('./QuickFindUF');
const QuickUnionUF = require('./QuickUnionUF');
describe('QuickFind Tests', () => {
    let qf;
    const N = 10;
    //Find/connected query: is there a path connecting the two objects?
    describe('UNION-FIND Tests', () => {
        it('should Find/connected query with QuickFindUF', () => {
            qf = new QuickFindUF(N);
            qf.union(4, 3)
            qf.union(3, 8)
            qf.union(6, 5)
            qf.union(9, 4)
            qf.union(2, 1)
            assert.deepStrictEqual(qf.connected(0, 7), false)
            assert.deepStrictEqual(qf.connected(8, 9), true)
            qf.union(5, 0)
            qf.union(7, 2)
            qf.union(1, 0)
            qf.union(6, 1)
            assert.deepStrictEqual(qf.connected(0, 7), true)
        });
        
    });
    
    describe('QUICK UNION Test', () => {
        it('should should Find/connected query with QuickUnionUF', () => {
            qf = new QuickUnionUF(N);
            qf.union(4, 3)
            qf.union(3, 8)
            qf.union(6, 5)
            qf.union(9, 4)
            qf.union(2, 1)
            assert.deepStrictEqual(qf.connected(0, 7), false)
            assert.deepStrictEqual(qf.connected(8, 9), true)
            qf.union(5, 0)
            qf.union(7, 2)
            qf.union(1, 0)
            qf.union(6, 1)
            assert.deepStrictEqual(qf.connected(0, 7), true)
        });
    });
});
