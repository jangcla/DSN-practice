/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const transposed = [];
    
    let tempArr = [];
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let value = matrix[i][j];
            tempArr.push(value);
        }
        transposed.push(tempArr);
        tempArr = [];
    }
    
    return transposed;
};