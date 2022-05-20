/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complements = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        
        if (complements[num] !== undefined) return [complements[num], i];
        complements[complement] = i;
    }
};

//this is O(n2)
