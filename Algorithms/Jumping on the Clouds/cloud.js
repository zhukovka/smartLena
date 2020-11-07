/**
 * Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 * @param c an array of integers representing cloud types
 * @param k an integer representing the length of one jump
 */
function jumpingOnClouds(c, k) {
    let e = 100;
    let i = 0;
    const n = c.length;
    
    let jump = -1;
    do {
        i = (i + k) % n;
        jump = c[i];
        if (jump === 1) {
            e -= 2;
        }
        e -= 1;
    } while (i !== 0)
    
    return e;
}

module.exports = jumpingOnClouds;
