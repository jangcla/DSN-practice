/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelList = jewels.split("");
    jewels = new Set(jewels);
    let jewelCount = 0;
    
    for (let i = 0; i < stones.length; i++) {
        let stone = stones[i];
        
        if (jewels.has(stone)) jewelCount++;
    };
    
    return jewelCount;
};