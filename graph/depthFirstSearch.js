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
let time;

function depthFirstSearch (graph) {
    time = 0;
    //white = undefined, gray = 'g', black = 'b'
    const colors = [];
    const dft = [];
    for (const i of graph.keys()) {
        const u = i + 1;
        if (graph[i] && !colors[u]) {
            const d = dft.push([]);
            visit(graph, u, colors, dft[d - 1]);
        }
    }
    return dft;
}

function visit (graph, u, colors, dft) {
    time++;
    console.log(`(${u}).d = ${time}`);
    colors[u] = 'g';
    dft.push(u);

    const E = graph[u - 1] || [];

    for (const v of E) {
        if (!colors[v]) {
            visit(graph, v, colors, dft);
        }
    }
    colors[u] = 'b';
    time++;
    console.log(`(${u}).f = ${time}`);
}


module.exports = depthFirstSearch;