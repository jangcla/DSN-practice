/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let num = 0; num <= x; num++) {
        let val = num * num;
        if (val === x) return num;
        if (val > x) return num - 1;
    }
};