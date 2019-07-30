function depthFirstSearch (graph) {
    //white = undefined, gray = 'g', black = 'b'
    const colors = [];
    const dft = [];
    for (const u of graph.keys()) {
        if (graph[u] && !colors[u]) {
            const d = dft.push([]);
            visit(graph, u, colors, dft[d - 1]);
        }
    }
    return dft;
}

function visit (graph, u, colors, dft) {
    colors[u] = 'g';
    dft.push(u);

    const E = graph[u] || [];

    for (const v of E) {
        if (!colors[v]) {
            visit(graph, v, colors, dft);
        }
    }
    colors[u] = 'b';
}

/**
 * adjacency-list representation of a **directed** graph G (V, E) consists of an array Adj of |V| lists,
 * one for each vertex in V.
 * For each u ∈ V , the adjacency list Adj[u] contains all the vertices v such that there is an edge (u, v) ∈ E.
 * That is, Adj[u] consists of all the vertices adjacent to u in G
 * @param edges - 2D array of edges (u, v) ∈ E
 */
function digraph (edges) {
    const Adj = [];
    for (const [u, v] of edges) {
        const i = u;
        if (!Adj[i]) {
            Adj[i] = [];
        }
        Adj[i].push(v);
    }
    return Adj;
}

/**
 * @example
 * journeyToMoon(5, [[0, 1], [2, 3] [0, 4]])
 * 6
 * Persons numbered [0,1,4], belong to one country,
 * and those numbered [2,3] belong to another.
 * The 6 ways of choosing a pair:
 * [0,2], [0,3], [1,2], [1, 3], [4,2], [4,3]
 *
 * @param {number} n - an integer that denotes the number of astronauts
 * @param {number[][]} astronauts - a 2D array where each element `astronauts[i]` is a 2-element integer array that represents the ID's of two astronauts from the same country
 * @return {number} c - An integer that denotes the number of ways to choose a pair of astronauts from different countries.
 */
function journeyToMoon (n, astronauts) {
    const G = digraph(astronauts);
    const dft = depthFirstSearch(G);
    const total = n * (n - 1) / 2;
    let c = dft.reduce((acc, tree) => {
        const m = tree.length;
        return acc + (m * (m - 1) / 2);
    }, 0);
    return total - c;
}

module.exports = journeyToMoon;