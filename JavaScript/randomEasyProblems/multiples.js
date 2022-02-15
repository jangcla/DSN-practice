/*
Write a function that multiples(max, num) that takes in two numbers.The function
    should return an array of positive numbers less than `max` that are multiples of`num`.

        Examples:

multiples(10, 2) => [2, 4, 6, 8]
multiples(15, 3) => [3, 6, 9, 12]
*/

// 1. we need to loop all values (positive) until max (for loop)
// 2. return an array  (we need to have an array to store te values)
// 3. the array is only of multiples of num (conditional to check if multiple of num)

function multiples(max, num) {
    var multiplesArr = [];

    for (var number = 1; number < max; number++) {
        if (number % num === 0) multiplesArr.push(number);
    }

    return multiplesArr;
}