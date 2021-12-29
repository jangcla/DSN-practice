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

// What is the time and space complexity of my code?

// Time wise i believe it is O(n) because i do a for loop and a sort outside of one another

// Spave wise i blieve it is O(n) as well as i focus on adding onto an array with n amount substrings to push
