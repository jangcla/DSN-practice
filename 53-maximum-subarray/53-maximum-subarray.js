/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let contiguousSum = -Infinity;
//     let sum = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
        
//         contiguousSum = Math.max(contiguousSum, sum)
        
//         if (sum < 0) sum = 0;
//     }
    
//     return contiguousSum;
// };






const maxSubArray = (nums) => {
    let maxSum = -Infinity;
    let sum = 0;
    
    for (let num of nums) {
        sum += num;
        
        maxSum = Math.max(sum, maxSum);
        
        if (sum < 0) sum = 0;
    }
    
    return maxSum;
}



