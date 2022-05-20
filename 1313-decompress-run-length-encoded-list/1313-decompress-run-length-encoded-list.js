/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let decompressed = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        let multiply = nums[i];
        let num = nums[i + 1];
        
        while (multiply > 0) {
            decompressed.push(num);
            multiply--;
        }
    }
    
    return decompressed;
};