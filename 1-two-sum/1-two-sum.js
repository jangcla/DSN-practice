/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complements = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (complements[num] !== undefined) return [complements[num], i];
        complements[complement] = i;
    }
};

