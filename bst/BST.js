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
        if (value >= this.value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BST(value);
            }
        } else {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BST(value);
            }
        }
        return this;
    }

    remove (value) {
        if (value >= this.value) {
            if (this.right) {
                this.right.remove(value);
            } else {
                this.right = null;
            }
        } else {
            if (this.left) {
                this.left.remove(value);
            } else {
                this.left = null;
            }
        }
        return this;
    }

    contains (value) {
        if (this.value === value) {
            return true;
        }
        if (value >= this.value) {
            return !!this.right && this.right.contains(value);
        } else {
            return !!this.left && this.left.contains(value);
        }
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