function depthFirstSearch(graph) {
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

function visit(graph, u, colors, dft) {
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

function graph(edges, n) {
    const Adj = (new Array(n)).fill(null);
    for (const [u, v] of edges) {
        if (!Adj[u]) {
            Adj[u] = [];
        }
        if (!Adj[v]) {
            Adj[v] = [];
        }
        Adj[u].push(v);
        Adj[v].push(u);
    }
    return Adj.map((e, i) => {
        if (!e) {
            return [i]
        }
        return e;
    });
}

function sumOfProducts(array) {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < array.length - 1; i++) {
        sum += array[i];
        res += sum * array[i + 1];
    }
    return res;
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
function journeyToMoon(n, astronauts) {
    const G = graph(astronauts, n);
    const dft = depthFirstSearch(G);
    const sizes = dft.map(t => t.length);
    return sumOfProducts(sizes);
}

module.exports = journeyToMoon;
