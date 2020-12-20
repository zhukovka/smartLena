/**
 * https://www.algoexpert.io/questions/Move%20Element%20To%20End
 * @param array{number[]}
 * @param toMove{number}
 */
function moveElementToEnd(array, toMove) {
    // Write your code here.
    for (let i = array.length - 1; i >= 0; i--) {
        const el = array[i];
        if (el === toMove) {
            array.splice(i, 1);
            array.push(el);
        }
    }
    return array;
}

module.exports = moveElementToEnd;
