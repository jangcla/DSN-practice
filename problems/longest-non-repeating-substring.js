// Create a method that takes in a string and returns the longest length of a non repeating substring

//1st attempt
const longestNonRepeatingSubstring = function (string) {
    if (string === '') return 0;
    let seen = [];
    let longest = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (!seen.includes(char)) {
            seen.push(char);
        } else {
            longest.push(seen.join(""));
            seen = [];
            seen.push(char)
        }
    }

    let longestWord = longest.sort(function (a, b) { return b.length - a.length; });
    return longestWord[0].length
};