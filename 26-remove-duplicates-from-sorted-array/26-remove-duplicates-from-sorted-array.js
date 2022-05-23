/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const dupes = new Set();
    
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (dupes.has(current)) continue;
        dupes.add(current);
        
        nums[j] = nums[i];
        j++;
    }
    
    return dupes.size;
};