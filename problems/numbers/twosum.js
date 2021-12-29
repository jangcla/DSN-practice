// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// var twoSum = function (nums, target) {
//     let ans = []
//     for (let i = 0; i < nums.length; i++) {
//         let num1 = nums[i]
//         for (let j = 0; j < nums.length; j++) {
//             let num2 = nums[j]
//             if ((num1 + num2 === target) && (j !== i)) {
//                 return [i, j];
//             }
//         }
//     }
// };

//this is first attempt has a run time of O(n^2)

var twoSum = function (nums, target) {
    let index = 0;
    let ans = [];

    const _helper = () => {
        for (let i = 0; i < nums.length; i++) {
            if ((nums[index] + nums[i] === target) && (index !== i)) {
                return [index, i];
            }
        }
        index++;
        return _helper();
    }

    return _helper();
}

//this second attempt has a run time of O(n);
//this second attempt will return the function that has a runtime of O(n) as many 
//times as it needs until it finds the first instance of the pair that result in the target value
//this second attempt focuses on a helper method that only loops once thus O(n)
