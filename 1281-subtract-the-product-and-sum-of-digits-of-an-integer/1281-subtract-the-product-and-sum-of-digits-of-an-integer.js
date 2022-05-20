/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const number = `${n}`;
    let multiplied = 1;
    let added = 0;
    
    for (let i = 0; i < number.length; i++) {
        let num = Number(number[i]);
        
        multiplied *= num;
        added += num;
    }
    
    return multiplied - added;
};