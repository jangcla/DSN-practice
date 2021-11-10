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


// Second attempt 

const spiralOrder = (matrix, ans = []) => {
    if (matrix.length === 1) {
        matrix[0].forEach(num => {
            ans.push(num)
        })
        return ans;
    } //base case for odd number lengthed of matrix

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0) {
            let first = matrix[i];
            for (let j = 0; j < first.length; j++) {
                let num = (first[j]);

                ans.push(num);
            }
            // console.log(ans)
        }

        if ((i !== 0) && (i !== matrix.length - 1)) {
            mid = matrix[i];
            last = mid.pop();

            ans.push(last);
            // console.log(ans)
        }

        if (i === matrix.length - 1) {
            last = matrix[i].reverse();

            for (let l = 0; l < last.length; l++) {
                let num = (last[l]);

                ans.push(num);
            }
            // console.log(ans)
        }
    }

    matrix.splice(0, 1); //gets rid of the first row
    matrix.splice(matrix.length - 1, 1); // gets rid of the last row

    if (matrix.length === 0) { return ans }; //other basecase for even number lengthed of matrix


    for (let k = matrix.length - 1; k > 0; k--) {
        let sub = matrix[k];
        let first = sub[0];

        ans.push(first);
        sub.splice(0, 1)
    }


    return spiralOrder(matrix, ans)
}


matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

console.log(spiralOrder(matrix)); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

console.log(spiralOrder(matrix)); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]



//figured out the answer on second attempt in under 30 minutes
//Solved using the initial attempt as a guideline for my thoughts


// Now to focus on the time complexity and the space complexity