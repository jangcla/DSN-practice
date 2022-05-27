/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLongestSubstring = (s) => {
//     let charCheck = new Set();
//     let longest = 0;
    
//     for(let char of s) {
//         if (charCheck.has(char)) charCheck = new Set();
   
//         charCheck.add(char);
//         if (charCheck.size > longest) longest = charCheck.size;
//     }
    
//     return longest;
// }


var lengthOfLongestSubstring = function(s) {
    let subStrings = [];
    
    let strObj = {};
    let tempStr = '';
    
    let i = 0;
    let tempI = 0;
    while (i < s.length) {
        let letter = s[tempI];
        if (strObj[letter] === undefined) {
            strObj[letter] = 1;
            if (letter !== undefined) tempStr += letter;
        } else {
            subStrings.push(tempStr);
            
            tempStr = "";
            strObj = {};
            
            i++;
            tempI = i;
            continue;

        }
        tempI++;
    }
    
    let longestLength = 0;
    
    for (let str of subStrings) {
        if (str.length > longestLength) longestLength = str.length;
    }
    
    return longestLength;
};