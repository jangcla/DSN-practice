// Create a method that takes in a 2D array and returns an array that has all values stored in a spiral matrix.

matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


//First attempt
const spiralOrder = (matrix) => {
    let ans = [];

    //this loops the first time through all the sub arrs

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0) {
            let first = matrix[i];
            for (let j = 0; j < first.length; j++) {
                let num = (first[j]);

                ans.push(num);
            }
            // console.log(ans)
        }

        if (i === 1) {
            mid = matrix[i];
            last = mid.pop();

            ans.push(last);
            // console.log(ans)
        }

        if (i === 2) {
            last = matrix[i].reverse();

            for (let l = 0; l < last.length; l++) {
                let num = (last[l]);

                ans.push(num);
            }
            // console.log(ans)
        }
    }
    matrix.splice(0, 1); //gets rid of the first row
    matrix.splice(2, 1); // gets rid of the last row


    return ans.concat(matrix[0]);
}


matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


