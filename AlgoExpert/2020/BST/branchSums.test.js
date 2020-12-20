const assert = require('assert');
const {BinaryTree, branchSums, nodeDepths} = require('./branchSums');
describe('branchSums Tests', () => {
    let tree;
    beforeEach(() => {
    });
    it('should return [15, 16, 18, 10, 11]', () => {
        tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const actual = branchSums(tree);
        const expected = [15, 16, 18, 10, 11];
        assert.deepStrictEqual(actual, expected);
    });
    it('should return 16', () => {
        const root = new BinaryTree(1);
        root.left = new BinaryTree(2);
        root.left.left = new BinaryTree(4);
        root.left.left.left = new BinaryTree(8);
        root.left.left.right = new BinaryTree(9);
        root.left.right = new BinaryTree(5);
        root.right = new BinaryTree(3);
        root.right.left = new BinaryTree(6);
        root.right.right = new BinaryTree(7);
        const actual = nodeDepths(root);
        const expected = 16;
        assert.deepStrictEqual(actual, expected);
    });
});
