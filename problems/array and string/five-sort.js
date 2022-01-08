// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument.The function should rearrange elements of the array such that all 5s appear at the end.Your function should perform this operation in -place by mutating the original array.The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

const fiveSort = (nums) => {
    // todo 
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] === 5 && nums[j] !== 5) {
            nums[i] = nums[j];
            nums[j] = 5;
        }
        if (nums[i] !== 5) i++;
        if (nums[j] === 5) j--;
    }

    return nums;
};

// this is time: O(n) because we have a while loop that itterates through the nums array
// this is space: O(1) because we are just keying to portions of the array to switch the values


