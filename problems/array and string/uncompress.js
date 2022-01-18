// uncompress
// Write a function, uncompress, that takes in a string as an argument.The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

//     for example, '2c' or '3a'.
//     The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
    let ans = [];
    let count = '';

    for (let i = 0; i < s.length; i++) {

        if (parseInt(s[i]) >= 0) {
            count += s[i];
        } else {
            for (let j = 0; j < parseInt(count); j++) {
                ans.push(s[i]);
            }
            count = '';
        }

    }

    return ans.join("");
};


// n = number of groups
// m = max num found in any group
// Time: O(n*m) as the potential is multiplied by the max amount
// Space: O(n*m) as the potential is multiplied by the max amount

