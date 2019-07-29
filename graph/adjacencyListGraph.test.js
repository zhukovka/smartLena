const assert = require('assert');
const adjacencyListGraph = require('./adjacencyListGraph');

describe('Adjacency list reprecentation of a graph', function () {
    it('should build a graph from an array of edges (u,v)', function () {
        const alGraph = adjacencyListGraph([[1, 2], [1, 5],
            [2, 1], [2, 5], [2, 3], [2, 4],
            [3, 2], [3, 4],
            [4, 2], [4, 5], [4, 3],
            [5, 4], [5, 1], [5, 2]]);
        const expected = [[2, 5], [1, 5, 3, 4], [2, 4], [2, 5, 3], [4, 1, 2]];
        assert.deepStrictEqual(alGraph, expected);
    });
});