class Node {
    constructor (value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/*
Linked List Construction
​
Write a class for a Doubly Linked List. The class should have a "head" and "tail" properties, both of which should point to either the None (null) value or to a Linked List node.
Every node will have a "value" property as well as "next" and "prev" properties, both of which can point to either the None (null) value or another node.
The class should support setting the head and tail of the linked list, inserting nodes before and after other nodes as well as at certain positions, removing given nodes and removing nodes with specific values, and searching for nodes with values.
Only the searching method should return a value: specifically, a boolean.
​
Sample input:
1 -> 2 -> 3 -> 4 -> 5
Sample output (after setting 4 to head):
4 -> 1 -> 2 -> 3 -> 5
Sample output (after setting 6 to tail):
4 -> 1 -> 2 -> 3 -> 5 -> 6
Sample output (after inserting 3 before 6):
4 -> 1 -> 2 -> 5 -> 3 -> 6
Sample output (after inserting a new 3 after 6):
4 -> 1 -> 2 -> 5 -> 3 -> 6 -> 3
 */
class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    setHead (node) {
        this.head = node;
        if (this.head) {
            this.head.prev = null;
        }
        if (!this.tail && this.head) {
            this.setTail(this.head);
        }
    }

    setTail (node) {
        this.tail = node;
        if (this.tail) {
            this.tail.next = null;
        }
        if (!this.head && this.tail) {
            this.setHead(this.tail);
        }
    }

    insertBefore (node, nodeToInsert) {
        nodeToInsert.next = node;
        if (node.prev) {
            nodeToInsert.prev = node.prev;
            node.prev.next = nodeToInsert;
        } else {
            this.setHead(nodeToInsert);
        }
        node.prev = nodeToInsert;
    }

    insertAfter (node, nodeToInsert) {
        nodeToInsert.prev = node;
        if (node.next) {
            nodeToInsert.next = node.next;
            node.next.prev = nodeToInsert;
        } else {
            this.setTail(nodeToInsert);
        }
        node.next = nodeToInsert;
    }

    insertAtPosition (position, nodeToInsert) {
        let node = this.head;
        if (!node || position === 1) {
            this.setHead(nodeToInsert);
        }
        let i = 1;
        while (node) {
            i++;
            if (i === position) {
                this.insertAfter(node, nodeToInsert);
                return;
            }
            node = node.next;
        }
    }

    removeNodesWithValue (value) {
        let node = this.head;
        while (node) {
            const next = node.next;
            if (node.value === value) {
                this.remove(node);
            }
            node = next;
        }
    }

    remove (node) {
        const prev = node.prev;
        const next = node.next;
        if (prev) {
            prev.next = node.next
        } else {
            this.setHead(next);
        }

        if (next) {
            next.prev = node.prev;
        } else {
            this.setTail(prev);
        }

        node.prev = null;
        node.next = null;
    }

    containsNodeWithValue (value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;
