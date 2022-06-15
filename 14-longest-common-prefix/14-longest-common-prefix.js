/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let i = 0;
    let j = 0;
    
    let prefix = '';
    let temp = strs[0][0];
    while (j < strs[0].length) {
        if (i === strs.length) {
            i = 0;
            prefix += temp;
            temp = strs[0][j + 1];
            
            j++;
        }
        if (i === strs.length) break;
        
        if (strs[i][j] !== temp) break;
        
        i++;
    }
    
    return prefix;
};