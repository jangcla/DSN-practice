/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length - 1;
    
    while (i < j) {
        if ( nums[i] === val && nums[j] !== val) {
            nums[i] = nums[j];
            nums[j] = val;
        }
        
        if (nums[i] !== val) i++;
        if (nums[j] === val) j--;
    }    
    
    const ind = nums.indexOf(val) === -1 ? nums.length : nums.indexOf(val);
    return ind;
};