const assert = require('assert');

describe('Linked List', function () {
    const LinkedList = require('./LinkedList');
    const node = {value: 0, next: null, prev: null};
    const node1 = {value: 1};
    const node2 = {value: 2};

    /**
     * @type {LinkedList}
     */
    let list;
    beforeEach(function () {
        list = new LinkedList();
        list.insert(node);
        list.insert(node1);
        list.insert(node2);
    });
    it('should insert a node to a linked list', function () {
        const nodes = list.toArray();
        assert.deepStrictEqual(nodes, [2, 1, 0]);
    });

    it('should delete a node from a linked list', function () {
        list.delete(node1);
        const nodes = list.toArray();
        assert.deepStrictEqual(nodes, [2, 0]);
    });

    it('should delete a node and update the head', function () {
        list.delete(node2);
        const nodes = list.toArray();
        assert.deepStrictEqual(nodes, [1, 0]);
        assert.deepStrictEqual(list.head, node1);
    });

    it('should find node with value 1', function () {
        const n = list.search(1);
        assert.deepStrictEqual(n.value, 1);
    });

});
