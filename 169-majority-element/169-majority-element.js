/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = {};
    
    for (let num of nums) {
        if (num in counter) counter[num]++;
        else counter[num] = 1;
    }
    
    let majority = nums[0];
    
    for (let num in counter) {
        if (counter[num] > counter[majority]) majority = num;
    }
    
    return majority;
};