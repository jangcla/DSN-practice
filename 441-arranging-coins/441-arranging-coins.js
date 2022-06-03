/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0;
    let amount = 1;
    
    while (n - amount >= 0) {
        n -= amount;
        amount++;
        count++;
    }
    
    return count;
};