/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = {};
    
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i];
        
        if (char in letterCount) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        
        if (char in letterCount) {
            letterCount[char]--;
        } else  {
            return false;
        }
    }
    
    for (let char in letterCount) {
        let value = letterCount[char];
        
        if (value < 0) return false;
    }
    
    return true;
};