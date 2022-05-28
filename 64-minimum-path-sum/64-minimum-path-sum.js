/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, row = 0, col = 0, memo = {}) {
    if (row === grid.length || col === grid[0].length) return Infinity;
    
    if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];
    
    const pos = row + ',' + col;
    if (pos in memo) return memo[pos];
    memo[pos] = grid[row][col] + Math.min(minPathSum(grid, row + 1, col, memo), minPathSum(grid, row, col + 1, memo));
    
    return memo[pos];
};

