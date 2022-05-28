/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid, row = 0, col = 0, memo = {}) {
    if (row === obstacleGrid.length || col === obstacleGrid[0].length || obstacleGrid[row][col] === 1) return 0;
    
    if (row === obstacleGrid.length - 1 && col === obstacleGrid[0].length - 1) return 1;
    
    const pos = row + "," + col;
    if (pos in memo) return memo[pos];
    
    memo[pos] = uniquePathsWithObstacles(obstacleGrid, row + 1, col, memo) + uniquePathsWithObstacles(obstacleGrid, row, col + 1, memo);
    return memo[pos];
};