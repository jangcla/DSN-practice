// Given a year, return the century it is in.The first century spans from the year 1 up to and including 
// the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

function solution(year) {
    let remainder = (year / 100);
    let century = (Math.round(year / 100));

    if (remainder > century) return century + 1;

    return century;
}

// this is space: O(1) as we are simply returning the value after dividing it
// this is time: O(1) as we are only returning a number after dividing it