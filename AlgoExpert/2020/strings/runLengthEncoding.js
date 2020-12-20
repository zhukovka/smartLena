/**
 * https://www.algoexpert.io/questions/Run-Length%20Encoding
 * @param string{string}
 */
function runLengthEncoding(string) {
    // Write your code here.
    const encoded = [];
    let n = 1;
    for (let i = 0; i < string.length; i++) {
        //if next char is the same
        const char = string[i];
        if (char === string[i + 1]) {
            //-keep track of the sequence length
            if (n + 1 > 9) {
                //-- if > 9 -> encode 9X, reset to 1
                encoded.push(`9${char}`);
                n = 0;
            }
            n += 1;
        } else {
            //encode nX
            encoded.push(`${n}${char}`);
            n = 1;
        }
        
    }
    return encoded.join('');
}

// Do not edit the line below.
module.exports = runLengthEncoding;
