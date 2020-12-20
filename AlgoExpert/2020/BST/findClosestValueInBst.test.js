const assert = require('assert');
const BST = require('./findClosestValueInBst').BST;
const findClosestValueInBst = require('./findClosestValueInBst').findClosestValueInBst;
describe('Find closest value in BST', () => {
    let root;
    beforeEach(() => {
        root = new BST(10);
        root.left = new BST(5);
        root.left.left = new BST(2);
        root.left.left.left = new BST(1);
        root.left.right = new BST(5);
        root.right = new BST(15);
        root.right.left = new BST(13);
        root.right.left.right = new BST(14);
        root.right.right = new BST(22);
    });
    it('should return 12', () => {
        const expected = 13;
        const actual = findClosestValueInBst(root, 12);
        assert.strictEqual(expected, actual)
    });
    
    it('should return 1', () => {
        const expected = 1;
        const actual = findClosestValueInBst(root, 0);
        assert.strictEqual(expected, actual)
    });
    
    it('should return 2', () => {
        const expected = 2;
        const actual = findClosestValueInBst(root, 3);
        assert.strictEqual(expected, actual)
    });
    
    it('should return 22', () => {
        const expected = 22;
        const actual = findClosestValueInBst(root, 30);
        assert.strictEqual(expected, actual)
    });
});
