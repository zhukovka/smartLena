class QuickFindUF {
    
    constructor(n) {
        //set id of each object to itself
        // (N array accesses)
        this.id = new Array(n).fill(0).map((e, i) => i);
    }
    
    /**
     * check whether p and q
     * are in the same component
     * (2 array accesses)
     * @param p
     * @param q
     * @return {boolean}
     */
    connected(p, q) {
        return this.id[p] === this.id[q];
    }
    
    /**
     * change all entries with id[p] to id[q]
     * (at most 2N + 2 array accesses)
     * @param p
     * @param q
     */
    union(p, q) {
        const pId = this.id[p];
        const qId = this.id[q];
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pId) {
                this.id[i] = qId;
            }
        }
    }
}

module.exports = QuickFindUF;
