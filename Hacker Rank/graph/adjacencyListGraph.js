/**
 * adjacency-list representation of an undirected graph G (V, E) consists of an array Adj of |V| lists,
 * one for each vertex in V.
 * For each u ∈ V , the adjacency list Adj[u] contains all the vertices v such that there is an edge (u, v) ∈ E.
 * That is, Adj[u] consists of all the vertices adjacent to u in G
 * @param edges - 2D array of edges (u, v) ∈ E
 */
function adjacencyListGraph (edges) {
    const Adj = [];
    for (const [u, v] of edges) {
        const i = u - 1;
        const j = v - 1;
        if (!Adj[i]) {
            Adj[i] = new Set();
        }
        if (!Adj[j]) {
            Adj[j] = new Set();
        }
        Adj[i].add(v);
        Adj[j].add(u);
    }
    return Adj;
}

module.exports = adjacencyListGraph;