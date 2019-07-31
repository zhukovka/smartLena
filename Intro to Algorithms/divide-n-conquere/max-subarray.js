function findMaxCrossingSubarray (array, low, mid, high) {
    let lSum = array[mid];
    let maxLeft = mid;
    let sum = 0;
    for (let i = mid; i >= low; i--) {
        sum += array[i];
        if (sum > lSum) {
            maxLeft = i;
            lSum = sum;
        }
    }
    let rSum = array[mid + 1];
    let maxRight = mid + 1;
    sum = 0;
    for (let i = mid + 1; i <= high; i++) {
        sum += array[i];
        if (sum > rSum) {
            maxRight = i;
            rSum = sum;
        }
    }
    console.log('   ⤷', low, high);
    console.log(`       findMaxCrossingSubarray (low: ${low}, mid: ${mid}, high: ${high})
        crossLow: ${low}, crossHigh: ${high}, crossSum: ${lSum} + ${rSum} = ${lSum + rSum});`);
    console.log('   ___');
    return [maxLeft, maxRight, lSum + rSum];
}

let step = 0;

function findMaximumSubarray (array, low, high) {
    step++;
    const _step = step;
    console.log('🏁', _step, `(${low} - ${high})`);
    if (low === high) {
        console.log(`(${_step}) 🛑 return: sum: ${array[low]}`);
        return [low, high, array[low]];
    }
    let mid = (low + high) / 2 | 0;
    console.log(`   (${_step}) 👉low!=high | low: ${low}, mid: ${mid}, high:${high}`);
    let [leftLow, leftHigh, leftSum] = findMaximumSubarray(array, low, mid);
    console.log(`   (${_step}.l) leftLow: ${leftLow}, leftHigh: ${leftHigh}, leftSum: ${leftSum}`);
    let [rightLow, rightHigh, rightSum] = findMaximumSubarray(array, mid + 1, high);
    console.log(`   (${_step}.r) rightLow: ${rightLow}, rightHigh: ${rightHigh}, rightSum: ${rightSum}`);
    console.log(`   (${_step}.c) crossLow:`);
    let [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(array, low, mid, high);

    if (leftSum >= rightSum && leftSum >= crossSum) {
        console.log(`(${_step}) 🛑 leftSum >= rightSum > return [${[leftLow, leftHigh, leftSum]}]`);
        return [leftLow, leftHigh, leftSum];
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
        console.log(`(${_step}) 🛑 rightSum >= leftSum > return [${[rightLow, rightHigh, rightSum]}]`);
        return [rightLow, rightHigh, rightSum];
    }
    console.log(`(${_step}) 🛑 return cross [${[crossLow, crossHigh, crossSum]}]`);
    return [crossLow, crossHigh, crossSum]
}

module.exports = findMaximumSubarray;