/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length) return 0;
    
    let half = Math.floor(nums.length / 2);
    if (nums[half] === target) return half;
    
    if (nums[half] > target) return searchInsert(nums.slice(0, half), target)
    else return 1 + half + searchInsert(nums.slice(half + 1), target);
};