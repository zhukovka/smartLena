/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 *
 * @param root{number[]}
 */
function makeTree(root) {
    let tree = new TreeNode(root.shift());
    let q = [tree];
    while (root.length) {
        let node = q.shift();
        if (node.val !== null) {
            node.left = new TreeNode(root.shift());
            node.right = new TreeNode(root.shift());
        }
        q.push(node.left, node.right);
    }
    return tree;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false;
    }
    const {right, val, left} = root;
    let sum = targetSum - val;
    if ((left == null) && (right == null)) {
        return (sum === 0);
    }
    return hasPathSum(left, sum) || hasPathSum(right, sum);
};

const assert = require('assert');

describe('112. Path Sum', function () {
    let tree, root, targetSum, actual;

    it('Example 1', function () {
        root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
        targetSum = 22
        tree = makeTree(root)
        assert.deepStrictEqual(hasPathSum(tree, targetSum), true)
    });
});