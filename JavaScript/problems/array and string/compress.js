// compress
// Write a function, compress, that takes in a string as an argument.The function should return a compressed version of the string where consecutive occurrences of the 
// same characters are compressed into the number of occurrences followed by the character.Single character occurrences should not be changed.

const compress = (s) => {
    // todo
    let ans = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count++;

        if (s[i + 1] !== s[i]) {
            if (count === 1) {
                ans.push(s[i]);
            } else {
                ans.push(count.toString() + s[i]);
            }
            count = 0;
        }

    }

    return ans.join("");
};

//n = length of string
//Time: O(n) as we only itterate once throughout the string given
//Space: O(n) as the amount we push into the array depends on the length of the string
