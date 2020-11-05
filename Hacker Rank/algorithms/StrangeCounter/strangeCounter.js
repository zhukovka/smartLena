/**
 * https://www.hackerrank.com/challenges/strange-code/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 * Strange Counter
 *
 * @param t
 */
function strangeCounter(t) {
    if (t === 1) {
        return 3;
    }
    
    const loop = Math.floor(Math.log2((t - 1) / 3 + 1));
    const startTime = (Math.pow(2, loop) - 1) * 3 + 1;
    
    let startLoop = Math.pow(2, loop) * 3;
    const deltaTime = t - startTime;
    return startLoop - deltaTime;
}

module.exports = strangeCounter;
