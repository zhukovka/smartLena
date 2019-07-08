class BST {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    static fromArray (array) {
        const bst = new BST(array.shift());
        for (const val of array) {
            bst.insert(val);
        }
        return bst;
    }

    insert (value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
                this.left.parent = this;
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
                this.right.parent = this;
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    inorder (arr) {
        this.left && this.left.inorder(arr);
        arr.push(this.value);
        this.right && this.right.inorder(arr);
    }

    search (value) {
        if (this.value === value) {
            return this;
        }
        if (value < this.value) {
            return this.left ? this.left.search(value) : null;
        } else {
            return this.right ? this.right.search(value) : null;
        }
    }

    min () {
        return this.left ? this.left.min() : this;
    }

    max () {
        return this.right ? this.right.max() : this;
    }

    /**
     * successor of the node is the smallest node
     * that value is greater than the node
     */
    successor () {
        if (this.right) {
            return this.right.min();
        }
        let up = this.parent;
        let node = this;
        while (up && up.right === node) {
            up = up.parent;
            node = up;
        }
        return up.parent || up;
    }
}

module.exports = BST;