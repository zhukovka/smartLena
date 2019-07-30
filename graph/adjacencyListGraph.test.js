const assert = require('assert');
const adjacencyListGraph = require('./adjacencyListGraph');
const digraph = require('./adjacencyListDigraph');

describe('Adjacency list reprecentation of a graph', function () {
    it('should build a graph from an array of edges (1,2), (2,3)', function () {
        const alGraph = adjacencyListGraph([[1, 2], [2, 3]]);
        const expected = [new Set([2]), new Set([1, 3]), new Set([2])];
        assert.deepStrictEqual(alGraph, expected);
    });
    it('should build a graph from an array of edges (u,v)', function () {
        const alGraph = adjacencyListGraph([[1, 2], [1, 5],
            [2, 1], [2, 5], [2, 3], [2, 4],
            [3, 2], [3, 4],
            [4, 2], [4, 5], [4, 3],
            [5, 4], [5, 1], [5, 2]]);
        const expected = [new Set([2, 5]), new Set([1, 5, 3, 4]), new Set([2, 4]), new Set([2, 5, 3]), new Set([4, 1, 2])];
        assert.deepStrictEqual(alGraph, expected);
    });
    
    describe('breadth-first search', function () {
        const breadthFirstSearch = require('./breadthFirstSearch');
        it('should return levels of a graph (1,2), (2,3)', function () {
            const alGraph = adjacencyListGraph([[1, 2], [2, 3]]);
            const lvl = [0, 1, 2];
            assert.deepStrictEqual(breadthFirstSearch(alGraph, 1), lvl);
        });
        it('should return 0, 1, 1, 2', function () {
            const edges = [
                [1, 2],
                [1, 3],
                [3, 4],
            ];
            const alGraph = adjacencyListGraph(edges);
            const lvl = [0, 1, 1, 2];
            assert.deepStrictEqual(breadthFirstSearch(alGraph, 1), lvl);
        });
    })
    
    describe('Breadth First Search: Shortest Reach (Hacker Rank)', function () {
        const bfs = require('./bfs');
        it('should return 6 6 -1', function () {
            const distances = bfs(4, 2, [
                [1, 2],
                [1, 3],
            ], 1);
            assert.deepStrictEqual(distances, [6, 6, -1]);
        });
        it('should return -1, 6', function () {
            const distances = bfs(3, 1, [
                [2, 3],
            ], 2);
            assert.deepStrictEqual(distances, [-1, 6]);
        });
        it('should return 6 6 12 -1', function () {
            const edges = [
                [1, 2],
                [1, 3],
                [3, 4],
            ];
            const d = bfs(5, 3, edges, 1);
            assert.deepStrictEqual(d, [6, 6, 12, -1]);
        });
        
        it('should return all -1', function () {
            //30 1
            // 9 20
            // 8
            const edges = [
                [9, 20]
            ];
            const n = 30;
            const d = bfs(n, 1, edges, 8);
            assert.deepStrictEqual(d, (new Array(n - 1)).fill(-1));
        });
    });
    
    describe('adjacency-list representation of a **directed** graph G (V, E)', function () {
        it('should build a digraph [[2, 3], [3], [4], [2], [4, 6], [6]]', function () {
            const edges = [[1, 2], [1, 3], [2, 3], [3, 4], [4, 2], [5, 4], [5, 6], [6, 6]];
            const G = digraph(edges);
            assert.deepStrictEqual([[2, 3], [3], [4], [2], [4, 6], [6]], G);
        });
        
        it('should build a digraph [[2, 3], [3], [4], [2], [4, 6], [6]]', function () {
            const edges = [[1, 2], [1, 3], [2, 3], [3, 4], [4, 2], [5, 4], [5, 6], [6, 6]];
            const G = digraph(edges);
            assert.deepStrictEqual([[2, 3], [3], [4], [2], [4, 6], [6]], G);
        });
    });
    describe('Depth First Search', function () {
        const depthFirstSearch = require('./depthFirstSearch');
        it('should depthFirstSearch', function () {
            const edges = [[1, 2], [1, 3], [2, 3], [3, 4], [4, 2], [5, 4], [5, 6], [6, 6]];
            const G = digraph(edges);
            const dft = depthFirstSearch(G);
            assert.deepStrictEqual(dft, [[1, 2, 3, 4], [5, 6]])
        });
        
        it('should construct depth first forest', function () {
            const edges = [[1, 2], [1, 5], [3, 4]];
            const G = digraph(edges);
            const dft = depthFirstSearch(G);
            assert.deepStrictEqual(dft, [[1, 2, 5], [3, 4]])
        });
    });
});

describe('Journey to the Moon', function () {
    const journeyToMoon = require('./journeyToMoon');
    it('should return 6 ways of choosing a pair', function () {
        const c = journeyToMoon(5, [[0, 1],
            [2, 3],
            [0, 4]]);
        assert.deepStrictEqual(c, 6);
    });
    
    it('should return 23 ways of choosing a pair', function () {
        const edges = [[0, 2],
            [1, 8],
            [1, 4],
            [2, 8],
            [2, 6],
            [3, 5],
            [6, 9]];
        const c = journeyToMoon(10, edges);
        assert.deepStrictEqual(c, 23);
    });
    
    it('should return 5 ways of choosing a pair', function () {
        /*
        * Persons numbered [0, 2] belong to the same country,
        * but persons 1 and 3 don't share countries with anyone else.
        * The UN has 5 ways of choosing a pair:
        * [0,1],[0,3],[1,2],[1,3],[2,3]
         */
        const c = journeyToMoon(4, [[0, 2]]);
        assert.deepStrictEqual(c, 5);
    });
});
