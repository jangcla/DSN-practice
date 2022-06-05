/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = new Set(s.split(" "));
    let count = 0;
    
    for (let word of words) {
        if (word === "") continue;
        
        count = word.length;
    }
   
    return count;
};