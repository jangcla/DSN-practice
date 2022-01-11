// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument.The function should return the most frequent character of the string.If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non - empty.

const mostFrequentChar = (s) => {
    // todo
    let letterCount = {};
    let count = 0;
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        let ele = s[i]
        if (letterCount[ele] === undefined) {
            letterCount[ele] = 1;
        } else {
            letterCount[ele]++;
        }
    }

    for (const key in letterCount) {
        if (letterCount[key] > count) {
            count = letterCount[key];
            ans = key;
        }
    }
    return ans;
};

//this is time 0(n + n) => O(n) because the first n is the first loop while the second n is the second loop
//this is space of O(n) => because im keying into an object and that relies on the length of the string which is n
