/**
 *
 * @param tree{BST}
 * @param target{number}
 */
function findClosestValueInBst(tree, target) {
    // left < value > right
    // target < value -> left
    // target > value -> right
    let value = tree.value;
    let delta = value - target;
    while (value >= 0 && tree) {
        if (target < value) {
            //go left
            tree = tree.left;
            value = tree && tree.value;
        } else {
            //go right
            tree = tree.right;
            value = tree && tree.value
        }
        if (!value) {
            break
        }
        const _d = value - target;
        if (Math.abs(_d) < Math.abs(delta)) {
            delta = _d
        }
    }
    return target + delta;
}

// This is the class of the input tree. Do not edit.

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
exports.BST = BST;
