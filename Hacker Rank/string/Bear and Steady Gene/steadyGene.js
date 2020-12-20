/**
 * Bear and Steady Gene
 * https://www.hackerrank.com/challenges/bear-and-steady-gene/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 * It should return an integer that represents the length of the smallest substring to replace.
 * @param gene{string}
 */
function steadyGene(gene) {
    const chars = ['A', 'C', 'T', 'G'];
    
    const charsCounts = gene.split('').reduce((acc, char) => {
        const i = chars.indexOf(char);
        acc[i] += 1;
        return acc;
    }, (new Array(chars.length).fill(0)));
    //GAAATAAA - [4,0,1,1]
    const g = gene.length / 4;
    //greater than g
    const gtG = chars.filter((char, i) => {
        return charsCounts[i] > g;
    }); //GAAATAAA - ['A']
    //less than g
    const ltG = chars.filter((char, i) => {
        return charsCounts[i] < g;
    });//GAAATAAA - ['C', 'T', 'G']
    let res = 0;
    let j = 0;
    let toChange = gtG.reduce((acc, ch) => {
        const n = charsCounts[chars.indexOf(ch)] - g;
        return acc + n;
    }, 0)
    let i = 0;
    while (i < toChange) {
        // const ch = chars.indexOf(gtG[i]);
        const ch2 = chars.indexOf(ltG[j]);
        if (charsCounts[ch2] < g) {
            //GAAATAAA - [4 - 1,0 + 1,1,1]
            // charsCounts[ch] -= 1;
            const d = g - charsCounts[ch2];
            charsCounts[ch2] += d;
            i += d;
            j++;
            res += d;
        }
    }
    return res
}

module.exports = steadyGene;
