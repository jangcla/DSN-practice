/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subset = [[]];
    
    for (let num of nums) {
        let temp = [];
        
        for (let i = 0; i < subset.length; i++) {
            let newArr = [...subset[i], num];
            temp.push(newArr);
        }
        subset = [...subset, ...temp];
    }
    
    return subset;
};


// Space complexity: the subset variable has n space and the temp array will have n space as well
// so this function is => O(n)

// Time Complexity: the function itterates through the numbers array at n time as well as itterate
// through the current subset that continuosly increases at the runtime of m so we essentially have
// it as => n * m so O(nm) || O(n^2);