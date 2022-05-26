/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let lowest = nums[0];
    let greatestDiff = -1;
    
    for (let num of nums) {
        if (num < lowest) lowest = num;
        
        let dif = num - lowest;
        greatestDiff = Math.max(dif, greatestDiff);
    }
    
    if (greatestDiff === 0) return -1; 
    return greatestDiff;
};