/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    if (m < 1 || n < 1) return 0;
    if (m === 1 && n === 1) return 1;
    
    const pos = m + ',' + n;
    if (pos in memo) return memo[pos];
    memo[pos] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
   
    return memo[pos];
};