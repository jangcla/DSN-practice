/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let joined = [];
    
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        let num1 = nums1[i];
        let num2 = nums2[j];
        
        if (num1 < num2) {
            joined.push(num1);
            i++;
        }  else {
            joined.push(num2);
            j++;
        }
    }   
    joined.push(...nums1.slice(i));
    joined.push(...nums2.slice(j));
    
    let length = joined.length;
    if (length % 2 === 0) {
        let i = length / 2;
        
        return (joined[i] + joined[i - 1]) / 2;
    }
    
    length = Math.floor(length / 2);
    
    return joined[length]
};