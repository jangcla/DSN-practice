/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const val = dividend / divisor;
    
    if (val < 0) {
        if (val <= Math.pow(-2, 31)) return Math.pow(-2, 31);
        
        return Math.ceil(val);
    } else {
        if (val >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
        
        return Math.floor(val);
    }
};