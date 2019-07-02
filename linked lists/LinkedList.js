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
        // Write your code here.
        this.head = node;
    }

    setTail (node) {
        // Write your code here.
        this.head = node;
    }

    insertBefore (node, nodeToInsert) {
        // Write your code here.
    }

    insertAfter (node, nodeToInsert) {
        // Write your code here.
    }

    insertAtPosition (position, nodeToInsert) {

    }

    removeNodesWithValue (value) {

    }

    remove (node) {
        // Write your code here.

    }

    containsNodeWithValue (value) {
        // Write your code here.

    }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;