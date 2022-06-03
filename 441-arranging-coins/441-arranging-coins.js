/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0;
    
    let start = 1;
    while (n - start >= 0) {
        n -= start;
        start++;
        count++;
    }
    
    return count;
};