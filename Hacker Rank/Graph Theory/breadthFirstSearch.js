/**
 * Given a graph G(V, E) and a distinguished source vertex s, breadth-first search systematically explores the edges of G
 * It computes the distance (smallest number of edges) from s to each reachable vertex.
 * It also produces a “breadth-first tree” with root s that contains all reachable vertices
 * algorithm discovers all vertices at distance k from s before discovering any vertices at distance k + 1
 * vertex is discovered the first time it is encountered during the search
 *
 * It attaches several additional attributes to each vertex in the graph.
 * We store the color of each vertex u ∈ V in the attribute u:color and the predecessor of u in the attribute u:p
 * u:d holds the distance from the source s to vertex u
 * @param graph - input graph G(V, E) is represented using adjacency lists
 * @param s - source vertex
 */
function breadthFirstSearch(graph, s) {
    let q = [s];
    //white = undefined, gray = 'g', black = 'b'
    const colors = [];
    const levels = [];
    while (q.length) {
        const u = q.shift();
        levels[u] = levels[u] || 0;
        for (const v of graph[u]) {
            if (!colors[v]) {
                colors[v] = 'g';
                levels[v] = 1 + (levels[u] || 0);
                q.push(v);
            }
        }
        colors[u] = 'b';
    }
    return levels;
}

module.exports = breadthFirstSearch;
