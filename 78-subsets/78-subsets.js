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
