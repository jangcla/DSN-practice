/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const sorted = [];
    
    let i = 0;
    let j = 0;
    while(m > 0 && n > 0) {
        if (nums1[i] < nums2[j]) {
            sorted.push(nums1[i]);
            i++;
            m--;
        } else {
            sorted.push(nums2[j]);
            j++;
            n--;
        }
    }
    if (m > 0) {
        for (i; i < nums1.length; i++) {
            sorted.push(nums1[i]);
        }
    }
    if (n > 0) {
        for (j; j < nums2.length; j++) {
            sorted.push(nums2[j]);
        }
    }
    
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = sorted[i];
    }

    return nums1;
};