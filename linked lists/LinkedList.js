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
        if (!this.head || !node) {
            this.head = node;
        } else {
            this.insertBefore(this.head, node)
        }
        this.tail = this.tail || node;
    }

    setTail (node) {
        if (!this.tail || !node) {
            this.tail = node;
        } else {
            this.insertAfter(this.tail, node);
        }
        this.head = this.head || node;
    }

    /*
    Realize that the insertBefore() and insertAfter() methods can be used to implement the setHead(), setTail(), and insertAtPosition() methods;
    making the insertBefore() and insertAfter() methods as robust as possible will simplify your code for the other methods.
    Make sure to take care of edge cases involving inserting nodes before the head of the linked list or inserting nodes after the tail of the linked list.
     */
    insertBefore (node, nodeToInsert) {
        if (node.prev) {
            const prev = node.prev;
            prev.next = nodeToInsert;
            nodeToInsert.prev = prev;
        } else {
            this.head = node;
        }

        node.prev = nodeToInsert;
        nodeToInsert.next = node;
    }

    insertAfter (node, nodeToInsert) {
        if (node.next) {
            this.insertBefore(node.next, nodeToInsert);
        } else {
            node.next = nodeToInsert;
            nodeToInsert.prev = node;
            this.tail = nodeToInsert;
        }
    }

    insertAtPosition (position, nodeToInsert) {

    }

    removeNodesWithValue (value) {

    }

    remove (node) {
        const {prev, next} = node;
        prev ? prev.next = next : this.setHead(next);
        next ? next.prev = prev : this.setTail(prev);
    }

    containsNodeWithValue (value) {
        let node = this.head;
        while (node) {
            if(node.value === value){
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