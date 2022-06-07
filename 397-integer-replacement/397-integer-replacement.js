/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1) return 0;
    
    let count = 1;
    if (n % 2 === 0) {
        count += integerReplacement(n / 2, memo);
    } else {
        count += Math.min(integerReplacement(n + 1, memo), integerReplacement(n - 1, memo));
    }
    
    memo[n] = count;
    return memo[n];
};