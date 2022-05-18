/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    const visited = new Set();
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (explore(grid, row, col, visited)) {
                islands++;
            }
        }
        
    }

    
    return islands;
};

const explore = (grid, row, col, visited) => {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;
    if (!rowInbound || !colInbound) return false;
    
    if (grid[row][col] === '0') return false;
    
    const pos = row + ',' + col;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, row + 1, col, visited);
    explore(grid, row - 1, col, visited);
    explore(grid, row, col + 1, visited);
    explore(grid, row, col - 1, visited);
    
    return true;   
}