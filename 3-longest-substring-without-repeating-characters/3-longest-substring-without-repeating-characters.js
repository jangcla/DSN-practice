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
        
        longest = Math.max(longest, charCheck.length);
    } 

    return longest;
}
