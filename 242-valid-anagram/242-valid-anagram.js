/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const letterCount = {};
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char in letterCount) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        
        if (char in letterCount) {
            letterCount[char]--;
        } else {
            return false;
        }
    }
    
    for (let letter in letterCount) {
        if (letterCount[letter] !== 0) return false;
    }
    
    return true
};