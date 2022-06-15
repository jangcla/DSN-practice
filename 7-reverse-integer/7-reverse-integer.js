/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x;
    if (x < 0) num = num * -1;
    let number = String(num).split("").map((ele) => Number(ele));
    
    while (number[number.length - 1] === 0) {
        number.pop();
    }
    number = Number(number.reverse().join(''));
    
    if (number > Math.pow(2, 31)) return 0;
    if (x < 0) return number * -1;
    
    return number;
};