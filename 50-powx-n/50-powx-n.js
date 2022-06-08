/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow(x, n * -1);
    
    const val = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return val * val;
    } else {
        return val * val * x;
    }
};