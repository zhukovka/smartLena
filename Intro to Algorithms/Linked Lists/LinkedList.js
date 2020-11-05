/**
 * @typedef {Object} LNode
 * @property {(LNode| null | undefined)} next
 * @property {(LNode| null | undefined)} prev
 * @property {(number|string)} value
 */

/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Doubly Linked List
 */
class LinkedList {
    /**
     * insert a node to the head of the list
     * @param {LNode} node
     */
    insert (node) {
        node.next = this.head;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
    }

    /**
     * @return {LNode[]} - an array representation of the linked list
     */
    toArray () {
        let node = this.head;
        const nodes = [];
        while (node) {
            nodes.push(node.value);
            node = node.next;
        }
        return nodes;
    }

    /**
     * @param {LNode} node - pointer to a node to delete from the linked list
     */
    delete (node) {
        const {prev, next} = node;
        if (prev) {
            prev.next = node.next;
        } else {
            this.head = next;
        }
        if (next) {
            next.prev = prev;
        }
    }

    /**
     *
     * @param {(string|number)} value - value of a node to find in the list
     * @return {LNode|null} - returns a node or `null` if not found
     */
    search (value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return null;
    }
}

module.exports = LinkedList;