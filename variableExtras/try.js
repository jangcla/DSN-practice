
// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers 
// in any order. A lucky number is the minimum element in its row and the maximum in its column.


// function luckyNumbers(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         let sub = matrix[i]
//         for (let j = 0; j < sub.length; j++) {
//             let num = sub[j];
//             if (rows(matrix).includes(num) && columns(matrix).includes(num)) {
//                 return num
//             }
//         }
//     }
//     return 0
// }


// function rows(matrix) {
//     let bear = []
//     for (let i = 0; i < matrix.length; i++) {
//         let sub = matrix[i]

//         let num = sub[0];
//         for (let j = 1; j < sub.length; j++) {
//             let number = sub[j]
//             if (number < num) {
//                 num = number
//             }

//         }
//         bear.push(num)
//     }
//     return bear
// }

// function columns(matrix) {
//     let bear = []
//     for (let i = 0; i < matrix[0].length; i++) {

//         let num = matrix[0][i]
//         for (let j = 0; j < matrix.length; j++) {
//             let number = matrix[j][i]
//             if (number > num) {
//                 num = number
//             }

//         }
//         bear.push(num)
//     }
//     return bear
// }



// matrix = [
//     [5, 9, 21],
//     [9, 19, 6],
//     [12, 14, 15]
// ]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [
//     [5, 10, 8, 6],
//     [10, 2, 7, 9],
//     [21, 15, 19, 10]
// ]

// console.log(luckyNumbers(matrix)); // [10]




