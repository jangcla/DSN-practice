/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1) return 0;
    
    let count = 0;
    if (n % 2 === 0) {
        count += integerReplacement(n / 2);
    } else {
        const up = integerReplacement(n + 1);
        const down = integerReplacement(n - 1);
        
        count += Math.min(up, down);
    }
    
    memo[n] = count + 1;
    return memo[n];
};