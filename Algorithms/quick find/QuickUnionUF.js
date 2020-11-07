/**
 * Data structure.
 * ・Integer array id[] of length N.
 * ・Interpretation: id[i] is parent of i.
 * ・Root of i is id[id[id[...id[i]...]]].
 */
class QuickUnionUF {
    
    constructor(n) {
        this.id = new Array(n).fill(0).map((e, i) => i);
    }
    
    /**
     * chase parent pointers until reach root
     * (depth of i array accesses)
     * @param i
     */
    root(i) {
        while (i !== this.id[i]) {
            i = this.id[i];
        }
        return i;
    }
    
    /**
     * check if p and q have same root
     * (depth of p and q array accesses)
     * @param p
     * @param q
     * @return {boolean}
     */
    connected(p, q) {
        return this.root(p) === this.root(q)
    }
    
    /**
     * change root of p to point to root of q
     * (depth of p and q array accesses)
     * @param p
     * @param q
     */
    union(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        this.id[i] = j;
    }
    
}

module.exports = QuickUnionUF;
