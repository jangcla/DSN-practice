/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    
    while (n !== 1) {
        n = helper(n);
        
        if (seen.has(n)) return false;
        seen.add(n);
    }
    
    return true;
};

const helper = (n) => {
    return n = String(n)
                .split("")
                .map(num => Math.pow(Number(num), 2))
                .reduce((carry, num) => carry + num, 0)
}