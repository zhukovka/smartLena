const BST = require('./BST');

/**
 *
 */
class RBT extends BST {
    constructor (value, color) {
        super(value);
        this.color = color;
    }
}

module.exports = RBT;