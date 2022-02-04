// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//     Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

function solution(inputArray) {
    let least = -Infinity;

    for (let i = 0; i < inputArray.length; i++) {
        let number = inputArray[i];
        let next = inputArray[i + 1];

        if ((number * next) > least) least = number * next

    }

    return least;
}
