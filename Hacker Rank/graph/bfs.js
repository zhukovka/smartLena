const adjacencyListGraph = require('./adjacencyListGraph');

/**
 *
 * @param n: the integer number of nodes
 * @param m: the integer number of edges
 * @param edges: a 2D array of start and end nodes for edges
 * @param s: the node to start traversals from
 */
function bfs (n, m, edges, s) {
    // adjacency-list representation of an undirected graph
    const graph = adjacencyListGraph(edges);
    const distances = (new Array(n)).fill(-1);
    let q = [s];
    while (q.length) {
        const u = q.shift();
        const i = u - 1;
        const next = graph[i];
        if (!next) {
            continue;
        }
        for (const v of next) {
            const j = v - 1;
            if (distances[j] === -1) {
                distances[j] = 6 + distances[i];
                q.push(v);
            }
        }
        distances[i] += 1;
    }
    distances.splice(s - 1, 1);
    return distances;
}

module.exports = bfs;