/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    
    while (i < j) {
        const result = numbers[i] + numbers[j];
        if (result === target) return [i + 1, j + 1];
        
        if (result < target) i++;
        else j--;
    }
};