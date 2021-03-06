/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, memo = {}) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    
    if (n in memo) return memo[n];
    
    memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
    return memo[n];
};