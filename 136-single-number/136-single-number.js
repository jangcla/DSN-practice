/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        const before = nums[i - 1];
        const next = nums[i + 1];
        
        if (before !== nums[i] && next !== nums[i]) return nums[i];
    }
    
};