const Graph = require('./graph');

/**
 *
 * @param cities: 2D array of integers where each cities[i]
 *                contains two integers that represent cities connected by an obstructed road
 */
function citiesToGraph(cities) {
    for (const [a, b] of cities) {
        const v = new Graph(a);
        v.addChild(b);
    }
}

/**
 *  HackerLand has n cities numbered from 1 to n.
 *  The cities are connected by m bidirectional roads. A citizen has access to a library if:
 *
 *  - Their city contains a library.
 *  - They can travel by road from their city to a city containing a library.
 *
 *  The cost of repairing any road is `c_road` dollars, and the cost to build a library in any city is `c_lib` dollars.
 *  If in the above example `c_road=2` and `c_lib=3`, we would build 5 roads at a cost of 5*2=10 and 2 libraries for a cost of 6.
 *  We don't need to rebuild one of the roads in the cycle 1->2->3->1.
 *
 * You are given `q` queries, where each query consists of a map of HackerLand and value of `c_lib` and `c_road`.
 * For each query, find the minimum cost of making libraries accessible to all the citizens and print it on a new line.
 *
 * @param n: integer, the number of cities
 * @param c_lib: integer, the cost to build a library
 * @param c_road: integer, the cost to repair a road
 * @param cities: 2D array of integers where each cities[i]
 *                contains two integers that represent cities connected by an obstructed road
 */
function roadsAndLibraries(n, c_lib, c_road, cities) {
    let total = 0;
    // if all of the vertices are connected the longest possible path is edges = vertices - 1
    
    const longestPath = n - 1;
    return total;
}

module.exports = roadsAndLibraries;
