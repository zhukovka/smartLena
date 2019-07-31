/**
 * Depth-first search explores edges out of the most recently discovered vertex v
 * that still has unexplored edges leaving it.
 * Once all of v’s edges have been explored, the search “backtracks” to explore edges
 * leaving the vertex from which v was discovered
 * depth-first search also timestamps each vertex.
 * Each vertex v has two timestamps: the first timestamp v.d records when v is first discovered
 * (and grayed),
 * and the second timestamp v.f records when the search finishes examining v’s adjacency list
 * (and blackens v)
 * @param {number[][]} graph - input graph may be undirected or directed
 * @return {number[]} dft - depth first trees
 */

function depthFirstSearch (graph) {
    //white = undefined, gray = 'g', black = 'b'
    const colors = [];
    const dft = [];
    for (const u of graph.keys()) {
        if (graph[u] && !colors[u]) {
            const d = dft.push([]);
            visit(graph, u, colors, dft[d]);
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


module.exports = depthFirstSearch;
