function merge (array, start, mid, end) {
    const left = array.slice(start, mid);
    const right = array.slice(mid, end);
    let i = 0;
    let j = 0;
    while (start < end) {
        console.log(`       ${left[i]}<${right[j]}?`);
        if (left[i] < right[j]) {
            array[start] = left[i];
            i++;
        } else {
            array[start] = right[j];
            j++;
        }
        start++;
    }

}

let step = 0;

function mergeSort (array, start, end) {
    step++;
    const _step = step;
    console.log(`🏁(${_step}), ${start}:${end}`);
    if (start < end) {
        const mid = (start + end) / 2 | 0;
        console.log(`   (${_step}), ${start}:${mid}`);
        mergeSort(array, start, mid);
        console.log(`   (${_step}), ${mid + 1}:${end}`);
        mergeSort(array, mid + 1, end);
        console.log(`   (${_step}), merge: ${start}:${mid}:${end}`);
        merge(array, start, mid, end);
        console.log(`   ___`)
    }

    console.log(`🛑(${_step}), ${start}:${end} return: ${array}`);
    return array;
}

module.exports = mergeSort;
