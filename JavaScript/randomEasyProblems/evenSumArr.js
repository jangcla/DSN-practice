/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
    let newNums = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        newNums.push(evenAdder(current));
    }

    return newNums;
}

function evenAdder(num) {
    let evenNums = 0;

    for (let number = 2; number <= num; number += 2) {
        evenNums += number;
    }

    return evenNums;
}