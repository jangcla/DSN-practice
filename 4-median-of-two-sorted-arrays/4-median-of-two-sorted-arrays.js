/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const joined = [];
    
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        
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
    
    let mid = Math.floor(joined.length / 2);
    
    if (joined.length % 2 === 0) return (joined[mid] + joined[mid - 1]) / 2;
    
    return joined[mid];
};