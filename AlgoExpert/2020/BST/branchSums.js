class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}

/**
 *
 * @param root{BinaryTree}
 */
function branchSums(root) {
    // Write your code here.
    const sums = [];
    let sum = 0;
    traverse(root, sum, sums)
    
    console.log(sums)
    return sums;
}

/**
 *
 * @param tree{BinaryTree}
 * @param sum{number}
 * @param sums{number[]}
 */
function traverse(tree, sum, sums) {
    if (!tree) {
        return;
    }
    const value = sum + tree.value;
    if (!tree.left && !tree.right) {
        sums.push(value)
    }
    traverse(tree.left, value, sums);
    traverse(tree.right, value, sums);
}


/**
 *
 * @param root{BinaryTree}
 */
function nodeDepths(root) {
    // Write your code here.
    let sum = 0;
    const stack = [{node: root, depth: 0}]
    while (stack.length) {
        const {node, depth} = stack.shift();
        sum += depth
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
        }
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
        }
    }
    return sum
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
exports.nodeDepths = nodeDepths;
