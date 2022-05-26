/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz1234567890'.split(""));
    
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        let front = s[i].toLowerCase();
        let back = s[j].toLowerCase();
        
        if (!alphabet.has(front)) {
            i++;
            continue;
        }
        if (!alphabet.has(back)) {
            j--;
            continue;
        }
        
        if (front !== back) return false;
        i++;
        j--;
    }
    
    return true;
};