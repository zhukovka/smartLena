/**
 * adjacency-list representation of an undirected graph G (V, E) consists of an array Adj of |V| lists,
 * one for each vertex in V.
 * For each u ∈ V , the adjacency list Adj[u] contains all the vertices v such that there is an edge (u, v) ∈ E.
 * That is, Adj[u] consists of all the vertices adjacent to u in G
 * @param edges - 2D array of edges (u, v) ∈ E
 */
function adjacencyListGraph(edges) {
    const Adj = [];
    for (const [u, v, w] of edges) {
        if (!Adj[u]) {
            Adj[u] = [];
        }
        if (!Adj[v]) {
            Adj[v] = [];
        }
        Adj[u].add(v);
        Adj[v].add(u);
    }
    return Adj;
}

module.exports = adjacencyListGraph;
