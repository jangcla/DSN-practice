/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

// 1. main function should loop through all words
// 2. the first word needs to be lowercased every word after is capitalized (first word lowercased everything after put in helper function)
// 3. return a string of all new words together


function variableNameify(words) {
    let newStr = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        let word = words[i];

        newStr += captitalizing(word);
    }

    return newStr;
}

function captitalizing(word) {
    let first = word[0].toUpperCase(); 
    let restOfWord = word.slice(1).toLowerCase()

    return first + restOfWord;
}