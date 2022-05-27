/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let charCheck = {length: 0};
    let longest = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];        
        if (charCheck[char] === undefined) {
            charCheck[char] = i;
            charCheck.length++;
        } else {
            i = charCheck[char];
            charCheck = {length: 0};
        }
        
        if (charCheck.length > longest) longest = charCheck.length;
    } 

    return longest;
}


// var lengthOfLongestSubstring = function(s) {
//     let subStrings = [];
    
//     let strObj = {};
//     let tempStr = '';
    
//     let i = 0;
//     let tempI = 0;
//     while (i < s.length) {
//         let letter = s[tempI];
//         if (strObj[letter] === undefined) {
//             strObj[letter] = 1;
//             if (letter !== undefined) tempStr += letter;
//         } else {
//             subStrings.push(tempStr);
            
//             tempStr = "";
//             strObj = {};
            
//             i++;
//             tempI = i;
//             continue;

//         }
//         tempI++;
//     }
    
//     let longestLength = 0;
    
//     for (let str of subStrings) {
//         if (str.length > longestLength) longestLength = str.length;
//     }
    
//     return longestLength;
// };