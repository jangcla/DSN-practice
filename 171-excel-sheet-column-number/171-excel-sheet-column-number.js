/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const alpha = alphaObj(' abcdefghijklmnopqrstuvwxyz');
    columnTitle = columnTitle.toLowerCase();

    let count = 0;
    let pow = columnTitle.length - 1;
    for (let char of columnTitle) {
        let colNum = alpha[char];
        
        count += Math.pow(26, pow) * colNum;
        pow--;
    }
    
    return count;
};


const alphaObj = (alpha) => {
    const obj = {};
    
    for (let ind in alpha) {
        obj[alpha[ind]] = Number(ind);
    }
    
    return obj;
}