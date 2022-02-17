/*
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], { a: 1, b: 2, d: 4 })    => [1, 2, 'c', 4]

valueReplace(['danny', 'kurstie', 'tommy'], { kurstie: 'operations', danny: 'placements' })  => ['placements', 'operations', 'tommy']

*/

// 1. i need to check every value in the array to see if its a key in the obj (for loop through all values) X
// 2. does my object have the array value as a key (obj[arrayValue] will give a value or undefined)
// 3. in the original array i just need to overwrite the old value with the obj value
// 4. return an array full of rewritten values  X

function valueReplace(array, obj) {

    for (let i = 0; i < array.length; i++) {
        let key = array[i];

        if (key in obj) array[i] = obj[key];
    }

    return array;
}