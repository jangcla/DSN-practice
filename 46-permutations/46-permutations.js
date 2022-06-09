/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [[]];
    
    const first = nums[0];
    const allPerms = [];
    
    for (let perm of permute(nums.slice(1))) {
        for (let i = 0; i <= perm.length; i++) {
            allPerms.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    
    return allPerms;
};