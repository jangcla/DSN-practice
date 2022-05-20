/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const balanceCheck = {"L" : 0, "R" : 0};
    let balanceCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        balanceCheck[char]++;
        
        if (balanceCheck["L"] === balanceCheck["R"]) balanceCount++;
    };
    
    return balanceCount;
};